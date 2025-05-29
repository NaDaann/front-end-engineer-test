import { useMemo } from 'react';
import { useHotOddsBFF } from '@/hooks/use-hot-odds-bff';
import {
    ODDS_GRID_LAYOUT_CLASSES,
    ODDS_GRID_ANIMATION_VARIANTS,
    ODDS_GRID_HOT_ODDS_CONFIG,
} from './config';
import type { ViewMode } from '../../types';

export function useOddsGridLayoutClassName(viewMode: ViewMode, customClassName?: string) {
    return useMemo(() => {
        const layoutClassName = ODDS_GRID_LAYOUT_CLASSES[viewMode];
        return `${layoutClassName} ${customClassName || ''}`.trim();
    }, [viewMode, customClassName]);
}

export function useOddsGridAnimationVariants() {
    return useMemo(() => ODDS_GRID_ANIMATION_VARIANTS, []);
}

export function useOddsGridHotOdds(sportId?: string, bookmaker?: string) {
    return useHotOddsBFF({
        sportId,
        bookmaker,
        enabled: ODDS_GRID_HOT_ODDS_CONFIG.enabled,
    });
}

export function useOddsGridContainerClassName(viewMode: ViewMode, customClassName?: string) {
    return useMemo(() => {
        const baseClassName = 'odds-grid-container';
        const layoutClassName = ODDS_GRID_LAYOUT_CLASSES[viewMode];
        return `${baseClassName} ${layoutClassName} ${customClassName || ''}`.trim();
    }, [viewMode, customClassName]);
}

export function useOddsGridShouldShowEmpty(odds: unknown[], isLoading: boolean) {
    return useMemo(() => {
        return !isLoading && odds.length === 0;
    }, [odds.length, isLoading]);
}

export function useOddsGridShouldShowLoading(odds: unknown[], isLoading: boolean) {
    return useMemo(() => {
        return isLoading && odds.length === 0;
    }, [odds.length, isLoading]);
}
