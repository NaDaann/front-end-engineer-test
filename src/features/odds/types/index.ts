import { OddsData, OddWithMatch } from '@/hooks/use-odds';

export type SortField = 'odds' | 'lastUpdated' | 'match' | 'bookmaker';
export type SortOrder = 'asc' | 'desc';
export type ViewMode = 'grid' | 'list';

export interface OddsFilters {
    searchTerm: string;
    selectedSport: string;
    selectedBookmaker: string;
    selectedStatus: string;
    sortField: SortField;
    sortOrder: SortOrder;
}

export type OddsPageFilters = OddsFilters;

export interface OddsPageState {
    filters: OddsPageFilters;
    viewMode: ViewMode;
    currentPage: number;
    hasInitiallyLoaded: boolean;
}

export interface UseOddsPage {
    state: OddsPageState;
    accumulatedOdds: OddWithMatch[];

    data: OddsData | null;
    isLoading: boolean;
    error: string | null;

    isFirstPageLoading: boolean;
    isFirstPageError: boolean;
    hasNoResults: boolean;
    shouldShowLoadingIndicator: boolean;
    isFilterLoading: boolean;

    updateFilters: (newFilters: Partial<OddsPageFilters>) => void;
    setViewMode: (viewMode: ViewMode) => void;
    loadNextPage: () => void;
    retryLoad: () => void;
    resetFilters: () => void;
}

export interface StatusConfig {
    color: string;
    text: string;
    pulse?: boolean;
}

export interface SortOption {
    value: SortField;
    label: string;
}

export interface StatusOption {
    value: string;
    label: string;
}
