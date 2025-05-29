import { useMemo, useCallback } from 'react';
import type { OddsPageFilters, SortField } from '../../types';
import { FILTER_SORT_OPTIONS, FILTER_STATUS_OPTIONS } from './config';

export function useFilterOptions() {
    const sortOptions = useMemo(() => FILTER_SORT_OPTIONS, []);
    const statusOptions = useMemo(() => FILTER_STATUS_OPTIONS, []);

    return { sortOptions, statusOptions };
}

export function useFilterHandlers(onFiltersChange: (filters: Partial<OddsPageFilters>) => void) {
    const handleSearchChange = useCallback(
        (value: string) => {
            onFiltersChange({ searchTerm: value });
        },
        [onFiltersChange],
    );

    const handleSportChange = useCallback(
        (sportId: string) => {
            onFiltersChange({ selectedSport: sportId });
        },
        [onFiltersChange],
    );

    const handleBookmakerChange = useCallback(
        (bookmaker: string) => {
            onFiltersChange({ selectedBookmaker: bookmaker });
        },
        [onFiltersChange],
    );

    const handleStatusChange = useCallback(
        (status: string) => {
            onFiltersChange({ selectedStatus: status });
        },
        [onFiltersChange],
    );

    return {
        handleSearchChange,
        handleSportChange,
        handleBookmakerChange,
        handleStatusChange,
    };
}

export function useSortHandler(
    filters: OddsPageFilters,
    onFiltersChange: (filters: Partial<OddsPageFilters>) => void,
) {
    return useCallback(
        (field: string) => {
            const sortField = field as SortField;
            const newSortOrder =
                filters.sortField === sortField && filters.sortOrder === 'asc' ? 'desc' : 'asc';
            onFiltersChange({
                sortField,
                sortOrder: newSortOrder,
            });
        },
        [filters.sortField, filters.sortOrder, onFiltersChange],
    );
}
