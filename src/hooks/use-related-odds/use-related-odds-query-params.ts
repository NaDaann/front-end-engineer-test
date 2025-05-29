import { useMemo } from 'react';
import type { RelatedOddsFilters } from './types';

export function useRelatedOddsQueryParams(filters?: RelatedOddsFilters) {
    return useMemo(() => {
        if (!filters) return undefined;

        const queryParams: Record<string, string | number> = {};

        Object.entries(filters).forEach(([key, value]) => {
            if (value !== undefined) {
                queryParams[key] = String(value);
            }
        });

        return Object.keys(queryParams).length > 0 ? queryParams : undefined;
    }, [filters]);
}

export function filtersToQueryParams(
    filters: RelatedOddsFilters,
): Record<string, string | number> | undefined {
    const queryParams: Record<string, string | number> = {};

    Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) {
            queryParams[key] = String(value);
        }
    });

    return Object.keys(queryParams).length > 0 ? queryParams : undefined;
}
