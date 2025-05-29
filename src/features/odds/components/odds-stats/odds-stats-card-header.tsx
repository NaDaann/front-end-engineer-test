'use client';

import { CardTitle } from '@/components/ui/card';
import type { OddsStatsCardHeaderProps } from './types';
import { ODDS_STATS_CARD_CLASSES } from './config';

export function OddsStatsCardHeader({
    title,
    icon: IconComponent,
    gradient,
}: OddsStatsCardHeaderProps) {
    return (
        <div className={ODDS_STATS_CARD_CLASSES.header}>
            <CardTitle className={ODDS_STATS_CARD_CLASSES.title}>{title}</CardTitle>
            <div
                className={`${ODDS_STATS_CARD_CLASSES.iconContainer} bg-gradient-to-r ${gradient}`}
            >
                <IconComponent className={ODDS_STATS_CARD_CLASSES.icon} />
            </div>
        </div>
    );
}
