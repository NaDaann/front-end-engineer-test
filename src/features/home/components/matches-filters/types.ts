import type { Sport } from '@/types';

export interface MatchesFiltersProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    selectedSport: string;
    onSportChange: (sportId: string) => void;
    sports: Sport[];
    favoriteCategories: string[];
}

export interface MatchesFiltersContainerProps {
    children: React.ReactNode;
    className?: string;
}

export interface MatchesFiltersSearchProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    placeholder?: string;
}

export interface MatchesFiltersButtonsProps {
    selectedSport: string;
    onSportChange: (sportId: string) => void;
    sports: Sport[];
    favoriteCategories: string[];
}

export interface MatchesFilterButtonProps {
    variant: 'default' | 'outline';
    size: 'sm';
    onClick: () => void;
    disabled?: boolean;
    children: React.ReactNode;
}

export type FilterButtonType = 'all' | 'favorites' | 'sport';

export interface FilterButtonConfig {
    id: string;
    type: FilterButtonType;
    label: string;
    disabled?: boolean;
}
