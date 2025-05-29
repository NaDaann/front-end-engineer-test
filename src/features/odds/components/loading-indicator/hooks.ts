import { useMemo } from 'react';
import { LoadingStateType, LoadingIndicatorProps } from './types';
import { LOADING_STATE_ICONS, LOADING_STATE_STYLES, LOADING_STATE_CONTENT } from './config';

export function useLoadingStateIcon(type: LoadingStateType) {
    return useMemo(() => LOADING_STATE_ICONS[type], [type]);
}

export function useLoadingStateStyles(type: LoadingStateType) {
    return useMemo(() => LOADING_STATE_STYLES[type], [type]);
}

export function useLoadingStateContent(type: LoadingStateType) {
    return useMemo(() => LOADING_STATE_CONTENT[type], [type]);
}

export function useLoadingState({
    isVisible,
    hasMore,
    hasData,
    error,
}: Pick<LoadingIndicatorProps, 'isVisible' | 'hasMore' | 'hasData' | 'error'>): LoadingStateType {
    return useMemo(() => {
        if (error) return 'error';
        if (!hasData && !hasMore) return 'complete';
        if (!hasMore) return 'complete';
        if (!isVisible) return 'scroll-hint';
        return 'loading';
    }, [isVisible, hasMore, hasData, error]);
}
