'use client';

import { MatchesGridProps } from './types';
import { MatchesGridContainer } from './matches-grid-container';
import { MatchesGridItem } from './matches-grid-item';
import { MatchesGridEmptyState } from './matches-grid-empty-state';
import { MatchesGridLoadingState } from './matches-grid-loading-state';
import { useMatchesGrid } from './hooks';

export function MatchesGrid({
    matches,
    loading,
    selectedSport,
    favoriteCategories,
    containerVariants,
    itemVariants,
}: MatchesGridProps) {
    const { hasMatches } = useMatchesGrid({
        matches,
        selectedSport,
        favoriteCategories,
    });

    if (loading) {
        return <MatchesGridLoadingState />;
    }

    if (hasMatches) {
        return (
            <MatchesGridContainer containerVariants={containerVariants}>
                {matches.map((match) => (
                    <MatchesGridItem 
                        key={match.id} 
                        match={match} 
                        itemVariants={itemVariants} 
                    />
                ))}
            </MatchesGridContainer>
        );
    }

    return (
        <MatchesGridEmptyState 
            selectedSport={selectedSport} 
            favoriteCategories={favoriteCategories} 
        />
    );
}
