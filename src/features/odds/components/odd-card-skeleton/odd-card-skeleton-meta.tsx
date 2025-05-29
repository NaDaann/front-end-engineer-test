'use client';

import { useSkeletonVariant } from './hooks';
import { SKELETON_DIMENSIONS } from './config';
import type { OddCardSkeletonMetaProps } from './types';

export function OddCardSkeletonMeta({ isHot = false }: OddCardSkeletonMetaProps) {
    const variant = useSkeletonVariant(isHot);

    return (
        <div className="relative z-10 border-t border-gray-200 pt-3">
            {/* Market and selection row */}
            <div className="flex justify-between text-sm mb-1">
                <div className={`${SKELETON_DIMENSIONS.market} ${variant.secondary} rounded`}></div>
                <div
                    className={`${SKELETON_DIMENSIONS.selection} ${variant.secondary} rounded`}
                ></div>
            </div>

            {/* Updated time skeleton */}
            <div
                className={`${SKELETON_DIMENSIONS.updated} ${variant.secondary} rounded mt-1`}
            ></div>
        </div>
    );
}
