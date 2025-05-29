import { useMemo } from 'react';
import { SKELETON_VARIANTS } from './config';
import type { SkeletonVariant } from './types';

/**
 * Hook to get skeleton styling variant based on hot state
 */
export const useSkeletonVariant = (isHot: boolean = false): SkeletonVariant => {
    return useMemo(() => {
        return isHot ? SKELETON_VARIANTS.hot : SKELETON_VARIANTS.normal;
    }, [isHot]);
};

/**
 * Hook to generate random hot state for skeleton lists
 */
export const useRandomHotState = (): boolean => {
    return useMemo(() => {
        return Math.random() > 0.8; // 20% chance of being hot
    }, []);
};

/**
 * Hook to build skeleton container classes
 */
export const useSkeletonContainerClasses = (isHot: boolean = false): string => {
    const variant = useSkeletonVariant(isHot);

    return useMemo(() => {
        return `relative rounded-lg border p-4 overflow-hidden ${variant.pulse} ${variant.container}`;
    }, [variant]);
};
