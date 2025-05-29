'use client';

import { MatchesFilters } from '../matches-filters';
import { MatchesGrid } from '../matches-grid';
import { MatchesSectionContentProps } from './types';

export function MatchesSectionContent({
    searchTerm,
    onSearchChange,
    selectedSport,
    onSportChange,
    sports,
    matches,
    matchesLoading,
    favoriteCategories,
    itemVariants,
    containerVariants,
}: MatchesSectionContentProps) {
    return (
        <>
            <MatchesFilters
                searchTerm={searchTerm}
                onSearchChange={onSearchChange}
                selectedSport={selectedSport}
                onSportChange={onSportChange}
                sports={sports}
                favoriteCategories={favoriteCategories}
            />

            <MatchesGrid
                matches={matches}
                loading={matchesLoading}
                selectedSport={selectedSport}
                favoriteCategories={favoriteCategories}
                containerVariants={containerVariants}
                itemVariants={itemVariants}
            />
        </>
    );
}
