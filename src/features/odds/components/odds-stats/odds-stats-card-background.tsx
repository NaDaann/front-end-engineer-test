'use client';

import type { OddsStatsCardBackgroundProps } from './types';
import { ODDS_STATS_CARD_CLASSES } from './config';

export function OddsStatsCardBackground({
    gradient,
}: Pick<OddsStatsCardBackgroundProps, 'gradient'>) {
    return (
        <>
            <div className={ODDS_STATS_CARD_CLASSES.cardBackground}>
                <div className={ODDS_STATS_CARD_CLASSES.backgroundCircle1} />
                <div className={ODDS_STATS_CARD_CLASSES.backgroundCircle2} />
            </div>

            <div
                className={`${ODDS_STATS_CARD_CLASSES.animatedBorder} bg-gradient-to-r ${gradient}`}
            />
        </>
    );
}
