'use client';

import { LoadingIndicator } from '../loading-indicator';
import type { OddsPageInfiniteScrollProps } from './types';
import { ODDS_PAGE_INFINITE_SCROLL_CLASSES } from './config';

export function OddsPageInfiniteScroll({
    loadingRef,
    shouldShowLoadingIndicator,
    hasMore,
    error,
    onRetry,
    hasData,
}: OddsPageInfiniteScrollProps) {
    if (!loadingRef) return null;

    return (
        <div ref={loadingRef} className={ODDS_PAGE_INFINITE_SCROLL_CLASSES.container}>
            <LoadingIndicator
                isVisible={shouldShowLoadingIndicator}
                hasMore={hasMore}
                error={error}
                onRetry={onRetry}
                hasData={hasData}
            />
        </div>
    );
}
