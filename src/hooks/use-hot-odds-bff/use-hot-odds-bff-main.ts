'use client';

import { useEffect, useState, useCallback } from 'react';
import type { UseHotOddsBFFOptions, UseHotOddsBFFReturn } from './types';
import { useHotOddsBFFData } from './use-hot-odds-bff-data';
import { useHotOddsBFFHelpers } from './use-hot-odds-bff-helpers';

export function useHotOddsBFF(options: UseHotOddsBFFOptions = {}): UseHotOddsBFFReturn {
    const { percentile = 0.15, sportId, bookmaker, enabled = true, refetchInterval } = options;
    const [lastFetch, setLastFetch] = useState<Date | null>(null);

    const {
        data,
        loading: isLoading,
        error,
        refetch: originalRefetch,
    } = useHotOddsBFFData(options);

    const { isHot, getHotOddsIds, isHotOddById } = useHotOddsBFFHelpers(data);

    const refetch = useCallback(async () => {
        await originalRefetch();
        if (data) {
            setLastFetch(new Date());
        }
    }, [originalRefetch, data]);

    useEffect(() => {
        if (!refetchInterval || !enabled) return;

        const interval = setInterval(refetch, refetchInterval);
        return () => clearInterval(interval);
    }, [refetch, refetchInterval, enabled]);

    useEffect(() => {
        if (data) {
            setLastFetch(new Date());
        }
    }, [data]);

    return {
        hotOdds: data?.hotOdds ?? [],
        threshold: data?.threshold ?? 2.0,
        stats: data?.stats ?? {
            totalOdds: 0,
            hotOddsCount: 0,
            threshold: 9.0,
            hotPercentage: 0,
            filters: { percentile },
        },

        isLoading,
        error,
        lastFetch,

        isHot,
        isHotOddById,
        getHotOddsIds,

        refetch,

        config: {
            percentile,
            sportId,
            bookmaker,
            enabled,
        },
    } as const;
}
