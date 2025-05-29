import type { OddWithMatch } from '@/hooks/use-odds';
import type { ViewMode } from '../../types';

export type OddsGridVariant = 'grid' | 'list';

export interface OddsGridProps {
    odds: OddWithMatch[];
    viewMode: ViewMode;
    isLoading?: boolean;
    sportId?: string;
    bookmaker?: string;
    className?: string;
}

export interface OddsGridContainerProps {
    viewMode: ViewMode;
    children: React.ReactNode;
    className?: string;
}

export interface OddsGridItemProps {
    odd: OddWithMatch;
    viewMode: ViewMode;
    isHot: boolean;
}

export interface OddsGridLoadingSkeletonProps {
    viewMode: ViewMode;
    count?: number;
}

export interface OddsGridEmptyStateProps {
    title?: string;
    description?: string;
    className?: string;
}

export interface AnimationVariants {
    [key: string]: {
        opacity: number;
        y?: number;
        transition?: {
            staggerChildren?: number;
        };
    };
}
