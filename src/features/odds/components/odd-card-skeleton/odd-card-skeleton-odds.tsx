'use client';

import { useSkeletonVariant } from './hooks';
import { SKELETON_DIMENSIONS } from './config';
import type { OddCardSkeletonOddsProps } from './types';

export function OddCardSkeletonOdds({ isHot = false }: OddCardSkeletonOddsProps) {
    const variant = useSkeletonVariant(isHot);

    return (
        <div className="text-right">
            {/* Odds value skeleton */}
            <div className="mb-1">
                <div
                    className={`${SKELETON_DIMENSIONS.odds} ${isHot ? variant.primary : variant.secondary} rounded`}
                ></div>
            </div>

            {/* Bookmaker skeleton */}
            <div className={`${SKELETON_DIMENSIONS.bookmaker} ${variant.secondary} rounded`}></div>
        </div>
    );
}
