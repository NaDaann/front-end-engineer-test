'use client';

import { useMemo } from 'react';
import { useRelatedOdds } from './use-related-odds-main';

export function useMatchRelatedOdds(oddId: string | null, limit = 5) {
    const filters = useMemo(
        () => ({
            sameMatch: true,
            excludeOriginal: true,
            limit,
        }),
        [limit],
    );

    return useRelatedOdds(oddId, filters);
}

export function useMarketRelatedOdds(oddId: string | null, limit = 8) {
    const filters = useMemo(
        () => ({
            sameMarket: true,
            excludeOriginal: true,
            limit,
        }),
        [limit],
    );

    return useRelatedOdds(oddId, filters);
}

export function useBookmakerRelatedOdds(oddId: string | null, limit = 6) {
    const filters = useMemo(
        () => ({
            sameBookmaker: true,
            excludeOriginal: true,
            limit,
        }),
        [limit],
    );

    return useRelatedOdds(oddId, filters);
}

export function useLeagueRelatedOdds(oddId: string | null, limit = 10) {
    const filters = useMemo(
        () => ({
            sameLeague: true,
            sameSport: true,
            excludeOriginal: true,
            limit,
        }),
        [limit],
    );

    return useRelatedOdds(oddId, filters);
}
