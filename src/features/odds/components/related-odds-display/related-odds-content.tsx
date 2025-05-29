import React from 'react';
import { OddCardSkeletonList } from '../odd-card-skeleton';
import { RelatedOddsGrid } from './related-odds-grid';
import { RelatedOddsMoreIndicator } from './related-odds-more-indicator';
import { RELATED_ODDS_SKELETON_CONFIG } from './config';
import type { RelatedOddsContentProps } from './types';

export function RelatedOddsContent({
    relatedOdds,
    maxItems,
    loading = false,
    className,
}: RelatedOddsContentProps) {
    if (loading) {
        return (
            <OddCardSkeletonList colsByScreenSize={RELATED_ODDS_SKELETON_CONFIG.colsByScreenSize} />
        );
    }

    const additionalCount = Math.max(0, relatedOdds.length - maxItems);

    return (
        <div className={className}>
            <RelatedOddsGrid relatedOdds={relatedOdds} maxItems={maxItems} />
            <RelatedOddsMoreIndicator additionalCount={additionalCount} />
        </div>
    );
}
