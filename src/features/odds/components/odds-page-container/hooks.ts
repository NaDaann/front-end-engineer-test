import { useMemo } from 'react';
import { useOddsPage, useInfiniteScroll } from '../../hooks';
import { UseOddsPage } from '../../types';

export function useOddsPageContainerData(): UseOddsPage {
    return useOddsPage();
}

export function useOddsPageInfiniteScroll(
    hasMore: boolean,
    isLoading: boolean,
    onLoadMore: () => void,
) {
    return useInfiniteScroll({
        hasMore,
        isLoading,
        onLoadMore,
    });
}

export function useOddsPageLayoutClassName(customClassName?: string) {
    return useMemo(() => {
        const baseClassName = 'container mx-auto px-4 py-8';
        return `${baseClassName} ${customClassName || ''}`.trim();
    }, [customClassName]);
}

export function useOddsPageContentClassName(customClassName?: string) {
    return useMemo(() => {
        const baseClassName = 'space-y-6';
        return `${baseClassName} ${customClassName || ''}`.trim();
    }, [customClassName]);
}

export function useOddsPageShouldShowError(isFirstPageError: boolean | null) {
    return useMemo(() => isFirstPageError, [isFirstPageError]);
}

export function useOddsPageShouldShowLoading(isFirstPageLoading: boolean) {
    return useMemo(() => isFirstPageLoading, [isFirstPageLoading]);
}

export function useOddsPageShouldShowContent(
    isFirstPageLoading: boolean,
    isFirstPageError: boolean,
) {
    return useMemo(() => {
        return !isFirstPageLoading && !isFirstPageError;
    }, [isFirstPageLoading, isFirstPageError]);
}
