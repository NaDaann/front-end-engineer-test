'use client';

import { useSkeletonVariant } from './hooks';
import { SKELETON_DIMENSIONS } from './config';
import type { OddCardSkeletonHeaderProps } from './types';

export function OddCardSkeletonHeader({ isHot = false }: OddCardSkeletonHeaderProps) {
    const variant = useSkeletonVariant(isHot);

    return (
        <div className="flex-1">
            {/* Title skeleton */}
            <div className="mb-1">
                <div
                    className={`${SKELETON_DIMENSIONS.title} ${variant.primary} rounded mb-1`}
                ></div>
            </div>

            {/* Subtitle skeleton */}
            <div className="mb-2">
                <div
                    className={`${SKELETON_DIMENSIONS.subtitle} ${variant.secondary} rounded`}
                ></div>
            </div>

            {/* Badge skeleton */}
            <div className="inline-flex items-center px-2 py-1 rounded">
                <div className={`${SKELETON_DIMENSIONS.badge} ${variant.secondary} rounded`}></div>
            </div>
        </div>
    );
}
