'use client';

import type { OddCardSkeletonProps } from './types';
import { OddCardSkeletonContainer } from './odd-card-skeleton-container';
import { OddCardSkeletonHeader } from './odd-card-skeleton-header';
import { OddCardSkeletonOdds } from './odd-card-skeleton-odds';
import { OddCardSkeletonMeta } from './odd-card-skeleton-meta';

export function OddCardSkeleton({ isHot = false }: OddCardSkeletonProps) {
    return (
        <OddCardSkeletonContainer isHot={isHot}>
            {/* Main content area */}
            <div className="relative z-10 flex justify-between items-start mb-3">
                <OddCardSkeletonHeader isHot={isHot} />
                <OddCardSkeletonOdds isHot={isHot} />
            </div>

            {/* Bottom metadata section */}
            <OddCardSkeletonMeta isHot={isHot} />
        </OddCardSkeletonContainer>
    );
}
