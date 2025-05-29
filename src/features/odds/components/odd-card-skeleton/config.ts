import { SkeletonVariant } from './types';

// Skeleton styling variants
export const SKELETON_VARIANTS: Record<'normal' | 'hot', SkeletonVariant> = {
    normal: {
        container: 'border-gray-200',
        pulse: 'animate-pulse',
        primary: 'bg-gray-300',
        secondary: 'bg-gray-300',
        accent: 'bg-gray-300',
    },
    hot: {
        container: 'border-orange-400 bg-gradient-to-br from-orange-900/20 to-red-1000/20',
        pulse: 'animate-pulse',
        primary: 'bg-orange-300',
        secondary: 'bg-gray-300',
        accent: 'bg-orange-200',
    },
};

// Default grid configuration
export const DEFAULT_GRID_CONFIG = {
    sm: 1,
    md: 2,
    lg: 3,
};

// Animation timings
export const SKELETON_ANIMATION = {
    duration: 'duration-1000',
    ease: 'ease-in-out',
};

// Common skeleton dimensions
export const SKELETON_DIMENSIONS = {
    title: 'h-5 w-3/4',
    subtitle: 'h-4 w-1/2',
    badge: 'h-4 w-16',
    odds: 'h-8 w-16',
    bookmaker: 'h-3 w-12',
    market: 'h-4 w-24',
    selection: 'h-4 w-20',
    updated: 'h-3 w-32',
};
