'use client';

import type { UseOddsFilters, UseOddsOptions, UseOddsReturn } from './types';
import { useOddsData } from './use-odds-data';

export function useOdds(filters: UseOddsFilters = {}, options: UseOddsOptions = {}): UseOddsReturn {
    const { data, loading, error, refetch } = useOddsData(filters, options);

    return {
        odds: data?.odds ?? [],
        stats: data?.stats ?? null,
        sports: data?.sports ?? [],
        bookmakers: data?.bookmakers ?? [],

        data,

        loading,
        error,

        refetch,
    } as const;
}
