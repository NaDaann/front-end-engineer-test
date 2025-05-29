'use client';

import type { OddsStatsContainerProps } from './types';
import { ODDS_STATS_CLASSES } from './config';

export function OddsStatsContainer({ children, className = '' }: OddsStatsContainerProps) {
    const containerClasses = `${ODDS_STATS_CLASSES.container} ${className}`.trim();

    return <div className={containerClasses}>{children}</div>;
}
