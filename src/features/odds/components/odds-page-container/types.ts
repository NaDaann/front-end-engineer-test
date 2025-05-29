import type { OddsData, OddWithMatch } from '@/hooks/use-odds';
import type { ViewMode, OddsFilters } from '../../types';

export interface OddsPageContainerProps {
    className?: string;
}

export interface OddsPageLayoutProps {
    children: React.ReactNode;
    className?: string;
}

export interface OddsPageHeaderProps {
    title?: string;
    description?: string;
    viewMode: ViewMode;
    onViewModeChange: (mode: ViewMode) => void;
    className?: string;
}

export interface OddsPageContentProps {
    accumulatedOdds: OddWithMatch[];
    viewMode: ViewMode;
    filters: OddsFilters;
    data: OddsData | null;
    isLoading: boolean;
    isFilterLoading: boolean;
    hasNoResults: boolean;
    onFiltersChange: (filters: Partial<OddsFilters>) => void;
    className?: string;
}

export interface OddsPageLoadingSkeletonProps {
    className?: string;
}

export interface OddsPageErrorContainerProps {
    error: string | Error;
    onRetry: () => void;
    className?: string;
}

export interface OddsPageInfiniteScrollProps {
    loadingRef: React.RefObject<HTMLDivElement | null> | null;
    shouldShowLoadingIndicator: boolean;
    hasMore: boolean;
    error: string | Error | null;
    onRetry: () => void;
    hasData: boolean;
}
