'use client';

import type { RelatedOddsFilters, UseRelatedOddsOptions, UseRelatedOddsResult } from './types';
import { useRelatedOddsData } from './use-related-odds-data';

export function useRelatedOdds(
    oddId: string | null,
    filters?: RelatedOddsFilters,
    options?: UseRelatedOddsOptions,
): UseRelatedOddsResult {
    const { data, loading, error, refetch } = useRelatedOddsData(oddId, filters, options);

    return {
        targetOdd: data?.targetOdd ?? null,
        relatedOdds: data?.relatedOdds ?? [],
        criteria: data?.criteria ?? null,
        stats: data?.stats ?? null,

        data,

        loading,
        error,

        refetch,
    } as const;
}
