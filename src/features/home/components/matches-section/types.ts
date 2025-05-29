import { Variants } from 'framer-motion';
import { Sport, Match } from '@/types';

export interface MatchesSectionProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    selectedSport: string;
    onSportChange: (sportId: string) => void;
    sports: Sport[];
    matches: Match[];
    matchesLoading: boolean;
    favoriteCategories: string[];
    itemVariants: Variants;
    containerVariants: Variants;
}

export interface MatchesSectionContainerProps {
    children: React.ReactNode;
    variants?: Variants;
}

export interface MatchesSectionHeaderProps {
    title?: string;
    showStatus?: boolean;
    statusText?: string;
}

export interface MatchesSectionContentProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    selectedSport: string;
    onSportChange: (sportId: string) => void;
    sports: Sport[];
    matches: Match[];
    matchesLoading: boolean;
    favoriteCategories: string[];
    itemVariants: Variants;
    containerVariants: Variants;
}
