import { useMemo } from 'react';
import { Match } from '@/types';
import { MATCHES_GRID_CONFIG } from './config';

export interface UseMatchesGridProps {
    matches: Match[];
    selectedSport: string;
    favoriteCategories: string[];
}

export function useMatchesGrid({ 
    matches, 
    selectedSport, 
    favoriteCategories 
}: UseMatchesGridProps) {
    const emptyStateMessage = useMemo(() => {
        if (selectedSport === 'favorites' && favoriteCategories.length === 0) {
            return MATCHES_GRID_CONFIG.emptyState.messages.noFavorites;
        }
        return MATCHES_GRID_CONFIG.emptyState.messages.noMatches;
    }, [selectedSport, favoriteCategories]);

    const hasMatches = matches.length > 0;

    const gridClassName = useMemo(() => {
        const { grid } = MATCHES_GRID_CONFIG;
        return `grid ${grid.gap} ${grid.columns.tablet} ${grid.columns.desktop}`;
    }, []);

    return {
        emptyStateMessage,
        hasMatches,
        gridClassName,
    };
}
