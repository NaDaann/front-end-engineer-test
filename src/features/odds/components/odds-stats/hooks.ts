import { useMemo } from 'react';
import type { OddsData } from '@/hooks/use-odds';
import type { StatCardData } from './types';
import { ODDS_STATS_CARD_CONFIGS } from './config';

export function useLoadedOdds(data: OddsData | null): number {
    return useMemo(() => {
        if (!data || !data.stats) return 0;

        const totalLoaded = data?.stats.limit * data?.stats.page;
        return totalLoaded > data?.stats.total ? data?.stats.total : totalLoaded;
    }, [data]);
}

export function useOddsStatsCards(data: OddsData | null): StatCardData[] {
    const loadedOdds = useLoadedOdds(data);

    return useMemo(() => {
        if (!data?.stats) return [];

        const { stats } = data;

        return [
            {
                ...ODDS_STATS_CARD_CONFIGS[0],
                value: stats.total.toLocaleString(),
                subtitle: `${stats.activeOdds} ativas`,
            },
            {
                ...ODDS_STATS_CARD_CONFIGS[1],
                value: stats.totalBookmakers.toString(),
                subtitle: 'Disponíveis',
            },
            {
                ...ODDS_STATS_CARD_CONFIGS[2],
                value: loadedOdds.toLocaleString(),
                subtitle: `de ${stats.total}`,
            },
            {
                ...ODDS_STATS_CARD_CONFIGS[3],
                value: (stats.sportBreakdown?.length || 0).toString(),
                subtitle: 'Categorias',
            },
        ];
    }, [data, loadedOdds]);
}

export function useOddsStatsClassName(className?: string): string {
    return useMemo(() => {
        return className || '';
    }, [className]);
}
