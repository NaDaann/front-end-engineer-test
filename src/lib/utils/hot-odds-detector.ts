import { Match, Odd } from '@/types';

interface HotOddsThresholds {
    highValueThreshold: number;
    averageThreshold: number;
    recentUpdateWindow: number;
    minHighOddsCount: number;
    volatilityThreshold: number;
}

const DEFAULT_THRESHOLDS: HotOddsThresholds = {
    highValueThreshold: 4.0,
    averageThreshold: 3.5,
    recentUpdateWindow: 60 * 60 * 1000,
    minHighOddsCount: 2,
    volatilityThreshold: 0.5,
};

export function isMatchHot(match: Match, thresholds: Partial<HotOddsThresholds> = {}): boolean {
    const config = { ...DEFAULT_THRESHOLDS, ...thresholds };

    if (!match.odds || match.odds.length === 0) {
        return false;
    }

    const checks = [
        hasHighAverageOdds(match.odds, config.averageThreshold),
        hasMultipleHighValueOdds(match.odds, config.highValueThreshold, config.minHighOddsCount),
        hasRecentOddsUpdates(match.odds, config.recentUpdateWindow),
        hasVolatileOdds(match.odds, config.volatilityThreshold),
        isLiveMatch(match),
    ];

    return checks.filter(Boolean).length >= 2;
}

function hasHighAverageOdds(odds: Odd[], threshold: number): boolean {
    const avgOdds = odds.reduce((sum, odd) => sum + odd.odds, 0) / odds.length;
    return avgOdds > threshold;
}

function hasMultipleHighValueOdds(odds: Odd[], threshold: number, minCount: number): boolean {
    const highOddsCount = odds.filter((odd) => odd.odds > threshold).length;
    return highOddsCount >= minCount;
}

function hasRecentOddsUpdates(odds: Odd[], timeWindow: number): boolean {
    const now = Date.now();
    return odds.some((odd) => {
        const timeDiff = now - new Date(odd.lastUpdated).getTime();
        return timeDiff < timeWindow;
    });
}

function hasVolatileOdds(odds: Odd[], threshold: number): boolean {
    const oddsValues = odds.map((odd) => odd.odds);
    const maxOdds = Math.max(...oddsValues);
    const minOdds = Math.min(...oddsValues);
    const spread = maxOdds - minOdds;

    return spread > threshold;
}

function isLiveMatch(match: Match): boolean {
    return match.status === 'live';
}

export function getHotOddsDetails(match: Match, thresholds: Partial<HotOddsThresholds> = {}) {
    const config = { ...DEFAULT_THRESHOLDS, ...thresholds };

    if (!match.odds || match.odds.length === 0) {
        return null;
    }

    const avgOdds = match.odds.reduce((sum, odd) => sum + odd.odds, 0) / match.odds.length;
    const highValueOdds = match.odds.filter((odd) => odd.odds > config.highValueThreshold);
    const recentUpdates = match.odds.filter((odd) => {
        const timeDiff = Date.now() - new Date(odd.lastUpdated).getTime();
        return timeDiff < config.recentUpdateWindow;
    });

    return {
        isHot: isMatchHot(match, thresholds),
        averageOdds: avgOdds,
        highValueOddsCount: highValueOdds.length,
        recentUpdatesCount: recentUpdates.length,
        isLive: match.status === 'live',
        reasons: {
            highAverage: hasHighAverageOdds(match.odds, config.averageThreshold),
            multipleHighValue: hasMultipleHighValueOdds(
                match.odds,
                config.highValueThreshold,
                config.minHighOddsCount,
            ),
            recentUpdates: hasRecentOddsUpdates(match.odds, config.recentUpdateWindow),
            volatile: hasVolatileOdds(match.odds, config.volatilityThreshold),
            live: isLiveMatch(match),
        },
    };
}

export function getHottestOdds(match: Match): Odd[] {
    if (!match.odds || match.odds.length === 0) {
        return [];
    }

    return match.odds.slice().sort((a, b) => {
        const oddsScore = b.odds - a.odds;
        const timeScore = new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        return oddsScore + timeScore / 1000000;
    });
}
