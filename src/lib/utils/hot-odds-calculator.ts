export const HOT_ODDS_CONFIG = {
    DEFAULT_THRESHOLD_PERCENTILE: 0.15,
    MINIMUM_ODDS_VALUE: 1.0,
    FALLBACK_THRESHOLD: 2.0,
    MAX_PERCENTILE: 0.5,
    MIN_PERCENTILE: 0.05,
} as const;

export class HotOddsCalculator {
    private readonly config: typeof HOT_ODDS_CONFIG;

    constructor(config: Partial<typeof HOT_ODDS_CONFIG> = {}) {
        this.config = { ...HOT_ODDS_CONFIG, ...config };
    }

    calculateThreshold(
        oddsValues: number[],
        percentile: number = this.config.DEFAULT_THRESHOLD_PERCENTILE,
    ): number {
        if (!Array.isArray(oddsValues) || oddsValues.length === 0) {
            return this.config.FALLBACK_THRESHOLD;
        }

        const validPercentile = Math.max(
            this.config.MIN_PERCENTILE,
            Math.min(this.config.MAX_PERCENTILE, percentile),
        );

        const validOdds = oddsValues.filter(
            (odds) =>
                typeof odds === 'number' &&
                odds >= this.config.MINIMUM_ODDS_VALUE &&
                isFinite(odds),
        );

        if (validOdds.length === 0) {
            return this.config.FALLBACK_THRESHOLD;
        }

        const sortedOdds = validOdds.sort((a, b) => b - a);

        const percentileIndex = Math.max(0, Math.ceil(sortedOdds.length * validPercentile) - 1);

        return sortedOdds[percentileIndex] || this.config.FALLBACK_THRESHOLD;
    }

    isHotOdds(oddsValue: number, threshold: number): boolean {
        return (
            typeof oddsValue === 'number' &&
            isFinite(oddsValue) &&
            oddsValue >= threshold &&
            oddsValue >= this.config.MINIMUM_ODDS_VALUE
        );
    }

    calculateStatistics(
        oddsValues: number[],
        percentile: number = this.config.DEFAULT_THRESHOLD_PERCENTILE,
    ) {
        const validOdds = oddsValues.filter(
            (odds) =>
                typeof odds === 'number' &&
                odds >= this.config.MINIMUM_ODDS_VALUE &&
                isFinite(odds),
        );

        if (validOdds.length === 0) {
            return {
                totalOdds: 0,
                validOdds: 0,
                threshold: this.config.FALLBACK_THRESHOLD,
                hotOddsCount: 0,
                hotPercentage: 0,
                average: 0,
                median: 0,
                min: 0,
                max: 0,
            };
        }

        const sortedOdds = validOdds.sort((a, b) => a - b);
        const threshold = this.calculateThreshold(oddsValues, percentile);
        const hotOddsCount = validOdds.filter((odds) => this.isHotOdds(odds, threshold)).length;

        return {
            totalOdds: oddsValues.length,
            validOdds: validOdds.length,
            threshold,
            hotOddsCount,
            hotPercentage: (hotOddsCount / validOdds.length) * 100,
            average: validOdds.reduce((sum, odds) => sum + odds, 0) / validOdds.length,
            median: sortedOdds[Math.floor(sortedOdds.length / 2)],
            min: sortedOdds[0],
            max: sortedOdds[sortedOdds.length - 1],
        };
    }
}

export const hotOddsUtils = {
    isHot: (oddsValue: number, allOdds: number[], percentile?: number): boolean => {
        const calculator = new HotOddsCalculator();
        const threshold = calculator.calculateThreshold(allOdds, percentile);
        return calculator.isHotOdds(oddsValue, threshold);
    },

    getThreshold: (allOdds: number[], percentile?: number): number => {
        const calculator = new HotOddsCalculator();
        return calculator.calculateThreshold(allOdds, percentile);
    },

    getStats: (allOdds: number[], percentile?: number) => {
        const calculator = new HotOddsCalculator();
        return calculator.calculateStatistics(allOdds, percentile);
    },
};

export const defaultHotOddsCalculator = new HotOddsCalculator();
