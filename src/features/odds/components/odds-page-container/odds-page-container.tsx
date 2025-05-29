'use client';

import type { OddsPageContainerProps } from './types';
import { ODDS_PAGE_DEFAULTS } from './config';
import {
    useOddsPageContainerData,
    useOddsPageInfiniteScroll,
    useOddsPageShouldShowError,
    useOddsPageShouldShowLoading,
    useOddsPageShouldShowContent,
} from './hooks';
import { OddsPageLayout } from './odds-page-layout';
import { OddsPageHeader } from './odds-page-header';
import { OddsPageLoadingSkeleton } from './odds-page-loading-skeleton';
import { OddsPageErrorContainer } from './odds-page-error-container';
import { OddsPageContent } from './odds-page-content';
import { OddsPageInfiniteScroll } from './odds-page-infinite-scroll';

export function OddsPageContainer({
    className = ODDS_PAGE_DEFAULTS.className,
}: OddsPageContainerProps) {
    const {
        state,
        accumulatedOdds,

        data,
        isLoading,
        error,

        isFirstPageLoading,
        isFirstPageError,
        hasNoResults,
        shouldShowLoadingIndicator,
        isFilterLoading,

        updateFilters,
        setViewMode,
        loadNextPage,
        retryLoad,
    } = useOddsPageContainerData();

    const { loadingRef } = useOddsPageInfiniteScroll(
        data?.stats.hasMore || false,
        isLoading,
        loadNextPage,
    );

    const shouldShowError = useOddsPageShouldShowError(isFirstPageError);
    const shouldShowLoading = useOddsPageShouldShowLoading(isFirstPageLoading);
    const shouldShowContent = useOddsPageShouldShowContent(isFirstPageLoading, isFirstPageError);

    if (shouldShowLoading) {
        return (
            <OddsPageLayout className={className}>
                <OddsPageLoadingSkeleton />
            </OddsPageLayout>
        );
    }

    if (shouldShowError) {
        return (
            <OddsPageLayout className={className}>
                <OddsPageErrorContainer error={error!} onRetry={retryLoad} />
            </OddsPageLayout>
        );
    }

    if (shouldShowContent) {
        return (
            <OddsPageLayout className={className}>
                <OddsPageHeader viewMode={state.viewMode} onViewModeChange={setViewMode} />

                <OddsPageContent
                    accumulatedOdds={accumulatedOdds}
                    viewMode={state.viewMode}
                    filters={state.filters}
                    data={data}
                    isLoading={isLoading}
                    isFilterLoading={isFilterLoading}
                    hasNoResults={hasNoResults}
                    onFiltersChange={updateFilters}
                />

                <OddsPageInfiniteScroll
                    loadingRef={loadingRef}
                    shouldShowLoadingIndicator={shouldShowLoadingIndicator}
                    hasMore={data?.stats.hasMore || false}
                    error={error}
                    onRetry={retryLoad}
                    hasData={accumulatedOdds.length > 0}
                />
            </OddsPageLayout>
        );
    }

    return null;
}
