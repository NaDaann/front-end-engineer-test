import { useMemo } from 'react';
import type { UseOddsFilters } from './types';

export function useOddsQueryParams(filters: UseOddsFilters) {
    return useMemo(() => {
        const queryParams: Record<string, string | number> = {};

        if (filters.search) queryParams.search = filters.search;
        if (filters.sportId) queryParams.sportId = filters.sportId;
        if (filters.bookmaker) queryParams.bookmaker = filters.bookmaker;
        if (filters.status) queryParams.status = filters.status;
        if (filters.sortField) queryParams.sortField = filters.sortField;
        if (filters.sortOrder) queryParams.sortOrder = filters.sortOrder;
        if (filters.page) queryParams.page = filters.page;
        if (filters.limit) queryParams.limit = filters.limit;

        return Object.keys(queryParams).length > 0 ? queryParams : undefined;
    }, [filters]);
}

export function filtersToQueryParams(
    filters: UseOddsFilters,
): Record<string, string | number> | undefined {
    const queryParams: Record<string, string | number> = {};

    if (filters.search) queryParams.search = filters.search;
    if (filters.sportId) queryParams.sportId = filters.sportId;
    if (filters.bookmaker) queryParams.bookmaker = filters.bookmaker;
    if (filters.status) queryParams.status = filters.status;
    if (filters.sortField) queryParams.sortField = filters.sortField;
    if (filters.sortOrder) queryParams.sortOrder = filters.sortOrder;
    if (filters.page) queryParams.page = filters.page;
    if (filters.limit) queryParams.limit = filters.limit;

    return Object.keys(queryParams).length > 0 ? queryParams : undefined;
}
