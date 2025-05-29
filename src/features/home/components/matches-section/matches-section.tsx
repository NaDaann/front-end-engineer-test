'use client';

import { MatchesSectionContainer } from './matches-section-container';
import { MatchesSectionHeader } from './matches-section-header';
import { MatchesSectionContent } from './matches-section-content';
import { MatchesSectionProps } from './types';

export function MatchesSection({
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
}: MatchesSectionProps) {
    return (
        <MatchesSectionContainer variants={itemVariants}>
            {MatchesSectionHeader && <MatchesSectionHeader />}

            {MatchesSectionContent && (
                <MatchesSectionContent
                    searchTerm={searchTerm}
                    onSearchChange={onSearchChange}
                    selectedSport={selectedSport}
                    onSportChange={onSportChange}
                    sports={sports}
                    matches={matches}
                    matchesLoading={matchesLoading}
                    favoriteCategories={favoriteCategories}
                    itemVariants={itemVariants}
                    containerVariants={containerVariants}
                />
            )}
        </MatchesSectionContainer>
    );
}
