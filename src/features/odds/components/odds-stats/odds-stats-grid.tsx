'use client';

import { OddsStatsCard } from './odds-stats-card';
import type { OddsStatsGridProps } from './types';

export function OddsStatsGrid({ statCards }: OddsStatsGridProps) {
    return (
        <>
            {statCards.map((card) => (
                <OddsStatsCard key={card.title} card={card} />
            ))}
        </>
    );
}
