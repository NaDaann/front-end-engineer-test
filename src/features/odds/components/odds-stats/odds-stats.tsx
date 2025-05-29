'use client';

import { OddsStatsContainer } from './odds-stats-container';
import { OddsStatsLoading } from './odds-stats-loading';
import { OddsStatsGrid } from './odds-stats-grid';
import { useOddsStatsCards, useOddsStatsClassName } from './hooks';
import type { OddsStatsProps } from './types';

export function OddsStats({ data }: OddsStatsProps) {
    const statCards = useOddsStatsCards(data);
    const className = useOddsStatsClassName();

    if (!data) {
        return <OddsStatsLoading />;
    }

    return (
        <OddsStatsContainer className={className}>
            <OddsStatsGrid statCards={statCards} />
        </OddsStatsContainer>
    );
}
