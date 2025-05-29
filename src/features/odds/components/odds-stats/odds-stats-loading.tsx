'use client';

import type { OddsStatsLoadingProps } from './types';
import { ODDS_STATS_DEFAULTS, ODDS_STATS_CLASSES } from './config';

export function OddsStatsLoading({
    message = ODDS_STATS_DEFAULTS.loadingMessage,
}: OddsStatsLoadingProps) {
    return <div className={ODDS_STATS_CLASSES.loading}>{message}</div>;
}
