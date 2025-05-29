import { Match } from '@/types';
import { Variants } from 'framer-motion';

export interface MatchesGridProps {
    matches: Match[];
    loading: boolean;
    selectedSport: string;
    favoriteCategories: string[];
    containerVariants: Variants;
    itemVariants: Variants;
}

export interface MatchesGridContainerProps {
    containerVariants: Variants;
    children: React.ReactNode;
}

export interface MatchesGridItemProps {
    match: Match;
    itemVariants: Variants;
}

export interface MatchesGridEmptyStateProps {
    selectedSport: string;
    favoriteCategories: string[];
}

export interface MatchesGridLoadingStateProps {
    count?: number;
}

export interface UseMatchesGridProps {
    matches: Match[];
    selectedSport: string;
    favoriteCategories: string[];
}
