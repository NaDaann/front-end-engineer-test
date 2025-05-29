'use client';

import type { OddsGridLoadingSkeletonProps } from './types';
import { ODDS_GRID_DEFAULTS, ODDS_GRID_LOADING_CLASSES } from './config';

export function OddsGridLoadingSkeleton({
    viewMode,
    count = ODDS_GRID_DEFAULTS.skeletonCount,
}: OddsGridLoadingSkeletonProps) {
    const containerClassName =
        viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : ODDS_GRID_LOADING_CLASSES.container;

    return (
        <div className={containerClassName}>
            {Array.from({ length: count }).map((_, i) => (
                <div
                    key={i}
                    className={`${ODDS_GRID_LOADING_CLASSES.skeleton} ${
                        viewMode === 'grid' ? 'h-48' : 'h-32'
                    }`}
                />
            ))}
        </div>
    );
}
