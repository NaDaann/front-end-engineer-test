'use client';

import type { OddsPageLoadingSkeletonProps } from './types';
import { ODDS_PAGE_LOADING_SKELETON } from './config';

export function OddsPageLoadingSkeleton({ className }: OddsPageLoadingSkeletonProps) {
    return (
        <div className={`${ODDS_PAGE_LOADING_SKELETON.container} ${className || ''}`}>
            <div className={ODDS_PAGE_LOADING_SKELETON.header} />
            <div className={ODDS_PAGE_LOADING_SKELETON.statsGrid}>
                {Array.from({ length: ODDS_PAGE_LOADING_SKELETON.statsCount }).map((_, i) => (
                    <div key={i} className={ODDS_PAGE_LOADING_SKELETON.statsItem} />
                ))}
            </div>
            <div className={ODDS_PAGE_LOADING_SKELETON.filters} />
            <div className={ODDS_PAGE_LOADING_SKELETON.gridContainer}>
                {Array.from({ length: ODDS_PAGE_LOADING_SKELETON.itemCount }).map((_, i) => (
                    <div key={i} className={ODDS_PAGE_LOADING_SKELETON.gridItem} />
                ))}
            </div>
        </div>
    );
}
