'use client';

import { MatchesFiltersContainer } from './matches-filters-container';
import { MatchesFiltersSearch } from './matches-filters-search';
import { MatchesFiltersButtons } from './matches-filters-buttons';
import type { MatchesFiltersProps } from './types';

export function MatchesFilters({
    searchTerm,
    onSearchChange,
    selectedSport,
    onSportChange,
    sports,
    favoriteCategories,
}: MatchesFiltersProps) {
    return (
        <MatchesFiltersContainer>
            <MatchesFiltersSearch searchTerm={searchTerm} onSearchChange={onSearchChange} />

            <MatchesFiltersButtons
                selectedSport={selectedSport}
                onSportChange={onSportChange}
                sports={sports}
                favoriteCategories={favoriteCategories}
            />
        </MatchesFiltersContainer>
    );
}
