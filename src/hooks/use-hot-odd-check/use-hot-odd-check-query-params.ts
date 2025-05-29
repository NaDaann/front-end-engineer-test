import { useMemo } from 'react';
import type { UseHotOddCheckOptions } from './types';

export function useHotOddCheckQueryParams(options: UseHotOddCheckOptions) {
    const { percentile = 0.15, sportId, bookmaker } = options;

    return useMemo(() => {
        const queryParams: Record<string, string | number> = {
            percentile: percentile.toString(),
        };

        if (sportId) queryParams.sportId = sportId;
        if (bookmaker) queryParams.bookmaker = bookmaker;

        return queryParams;
    }, [percentile, sportId, bookmaker]);
}

export function optionsToQueryParams(
    options: UseHotOddCheckOptions,
): Record<string, string | number> {
    const { percentile = 0.15, sportId, bookmaker } = options;

    const queryParams: Record<string, string | number> = {
        percentile: percentile.toString(),
    };

    if (sportId) queryParams.sportId = sportId;
    if (bookmaker) queryParams.bookmaker = bookmaker;

    return queryParams;
}
