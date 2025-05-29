import React from 'react';
import { OddCardSkeletonList } from '../odd-card-skeleton';
import { RELATED_ODDS_SKELETON_CONFIG } from './config';
import type { RelatedOddsLoadingProps } from './types';

export function RelatedOddsLoading({ maxItems = 3, className }: RelatedOddsLoadingProps) {
    return (
        <div className={className}>
            <OddCardSkeletonList
                colsByScreenSize={RELATED_ODDS_SKELETON_CONFIG.colsByScreenSize}
                count={maxItems}
            />
        </div>
    );
}
