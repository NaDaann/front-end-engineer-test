import { useState, useEffect, useMemo, useCallback } from 'react';
import { useDebounce } from '@/hooks/use-debounce';
import { useOdds, UseOddsFilters, OddWithMatch } from '@/hooks/use-odds';
import type {
    OddsPageFilters,
    OddsPageState,
    SortField,
    SortOrder,
    UseOddsPage,
    ViewMode,
} from '../types';

export function useOddsPage(): UseOddsPage {
    const [state, setState] = useState<OddsPageState>({
        filters: {
            searchTerm: '',
            selectedSport: '',
            selectedBookmaker: '',
            selectedStatus: '',
            sortField: 'odds' as SortField,
            sortOrder: 'desc' as SortOrder,
        },
        viewMode: 'grid' as ViewMode,
        currentPage: 1,
        hasInitiallyLoaded: false,
    });

    const [accumulatedOdds, setAccumulatedOdds] = useState<OddWithMatch[]>([]);

    const debouncedSearchTerm = useDebounce(state.filters.searchTerm, 600);

    const apiFilters: UseOddsFilters = useMemo(
        () => ({
            search: debouncedSearchTerm || undefined,
            sportId: state.filters.selectedSport || undefined,
            bookmaker: state.filters.selectedBookmaker || undefined,
            status: state.filters.selectedStatus || undefined,
            sortField: state.filters.sortField,
            sortOrder: state.filters.sortOrder,
            page: state.currentPage,
            limit: 20,
        }),
        [
            debouncedSearchTerm,
            state.filters.selectedSport,
            state.filters.selectedBookmaker,
            state.filters.selectedStatus,
            state.filters.sortField,
            state.filters.sortOrder,
            state.currentPage,
        ],
    );

    const { data, loading: isLoading, error } = useOdds(apiFilters);

    const isFirstPageLoading = useMemo(
        () => !state.hasInitiallyLoaded && isLoading,
        [state.hasInitiallyLoaded, isLoading],
    );

    const isFirstPageError = useMemo(
        () => !state.hasInitiallyLoaded && error,
        [state.hasInitiallyLoaded, error],
    );

    const hasNoResults = useMemo(
        () => state.hasInitiallyLoaded && accumulatedOdds.length === 0 && !isLoading,
        [state.hasInitiallyLoaded, accumulatedOdds.length, isLoading],
    );

    const shouldShowLoadingIndicator = useMemo(
        () => accumulatedOdds.length > 0 && isLoading,
        [accumulatedOdds.length, isLoading],
    );

    const isFilterLoading = useMemo(
        () => state.hasInitiallyLoaded && state.currentPage === 1 && isLoading,
        [state.hasInitiallyLoaded, state.currentPage, isLoading],
    );

    const updateFilters = useCallback((newFilters: Partial<OddsPageFilters>) => {
        setState((prev) => {
            const updatedFilters = { ...prev.filters, ...newFilters };

            const hasFilterChanged = Object.keys(newFilters).some((key) => {
                const filterKey = key as keyof OddsPageFilters;
                return prev.filters[filterKey] !== updatedFilters[filterKey];
            });

            if (!hasFilterChanged) {
                return prev;
            }

            return {
                ...prev,
                filters: updatedFilters,
                currentPage: 1,
            };
        });
    }, []);

    const setViewMode = useCallback((viewMode: ViewMode) => {
        setState((prev) => ({ ...prev, viewMode }));
    }, []);

    const resetFilters = useCallback(() => {
        setState((prev) => ({
            ...prev,
            filters: {
                searchTerm: '',
                selectedSport: '',
                selectedBookmaker: '',
                selectedStatus: '',
                sortField: 'lastUpdated' as SortField,
                sortOrder: 'desc' as SortOrder,
            },
            currentPage: 1,
        }));

        setAccumulatedOdds([]);
    }, []);

    const loadNextPage = useCallback(() => {
        if (data?.stats.hasMore && !isLoading && state.hasInitiallyLoaded) {
            setState((prev) => ({ ...prev, currentPage: prev.currentPage + 1 }));
        }
    }, [data?.stats.hasMore, isLoading, state.hasInitiallyLoaded]);

    const retryLoad = useCallback(() => {
        setState((prev) => ({
            ...prev,
            hasInitiallyLoaded: false,
            currentPage: 1,
        }));
        setAccumulatedOdds([]);
    }, []);

    useEffect(() => {
        if (data?.odds) {
            if (state.currentPage === 1) {
                setAccumulatedOdds(data.odds);
                setState((prev) => ({ ...prev, hasInitiallyLoaded: true }));
            } else {
                setAccumulatedOdds((prev) => {
                    const existingIds = new Set(prev.map((odd) => odd.id));
                    const newOdds = data.odds.filter((odd) => !existingIds.has(odd.id));
                    return [...prev, ...newOdds];
                });
            }
        }
    }, [data?.odds, state.currentPage]);

    return {
        state,
        accumulatedOdds,

        data,
        isLoading,
        error,

        isFirstPageLoading,
        isFirstPageError: !!isFirstPageError,
        hasNoResults,
        shouldShowLoadingIndicator,
        isFilterLoading,

        updateFilters,
        setViewMode,
        loadNextPage,
        retryLoad,
        resetFilters,
    };
}
