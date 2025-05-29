'use client';

import type { OddsStatsCardContentProps } from './types';
import { ODDS_STATS_CARD_CLASSES } from './config';

export function OddsStatsCardContent({ value, subtitle, gradient }: OddsStatsCardContentProps) {
    return (
        <div className={ODDS_STATS_CARD_CLASSES.content}>
            <div className={ODDS_STATS_CARD_CLASSES.contentSpace}>
                <div className={`${ODDS_STATS_CARD_CLASSES.value} bg-gradient-to-r ${gradient}`}>
                    {value}
                </div>
                <div className={ODDS_STATS_CARD_CLASSES.subtitleContainer}>
                    <div
                        className={`${ODDS_STATS_CARD_CLASSES.subtitleDot} bg-gradient-to-r ${gradient}`}
                    />
                    <p className={ODDS_STATS_CARD_CLASSES.subtitle}>{subtitle}</p>
                </div>
            </div>
        </div>
    );
}
