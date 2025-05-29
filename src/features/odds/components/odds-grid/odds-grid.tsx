'use client';

import { AnimatePresence } from 'framer-motion';
import type { OddsGridProps } from './types';
import { ODDS_GRID_DEFAULTS } from './config';
import {
    useOddsGridHotOdds,
    useOddsGridShouldShowEmpty,
    useOddsGridShouldShowLoading,
} from './hooks';
import { OddsGridContainer } from './odds-grid-container';
import { OddsGridItem } from './odds-grid-item';
import { OddsGridLoadingSkeleton } from './odds-grid-loading-skeleton';
import { OddsGridEmptyState } from './odds-grid-empty-state';

export function OddsGrid({
    odds,
    viewMode,
    isLoading = ODDS_GRID_DEFAULTS.isLoading,
    sportId,
    bookmaker,
    className = ODDS_GRID_DEFAULTS.className,
}: OddsGridProps) {
    const { isHot } = useOddsGridHotOdds(sportId, bookmaker);
    const shouldShowLoading = useOddsGridShouldShowLoading(odds, isLoading);
    const shouldShowEmpty = useOddsGridShouldShowEmpty(odds, isLoading);

    if (shouldShowLoading) {
        return <OddsGridLoadingSkeleton viewMode={viewMode} />;
    }

    if (shouldShowEmpty) {
        return <OddsGridEmptyState />;
    }

    return (
        <OddsGridContainer viewMode={viewMode} className={className}>
            <AnimatePresence>
                {odds.map((odd) => (
                    <OddsGridItem
                        key={odd.id}
                        odd={odd}
                        viewMode={viewMode}
                        isHot={isHot(odd.odds)}
                    />
                ))}
            </AnimatePresence>
        </OddsGridContainer>
    );
}
