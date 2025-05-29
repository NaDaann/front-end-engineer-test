import { Star } from 'lucide-react';
import { MatchesFilterButton } from './matches-filter-button';
import { useFilterButtons } from './hooks';
import type { MatchesFiltersButtonsProps } from './types';
import { FILTER_BUTTON_STYLES } from './config';

export function MatchesFiltersButtons({
    selectedSport,
    onSportChange,
    sports,
    favoriteCategories,
}: MatchesFiltersButtonsProps) {
    const filterButtons = useFilterButtons(sports, favoriteCategories);

    return (
        <div className={FILTER_BUTTON_STYLES.container}>
            {filterButtons.map((button) => {
                const variant = selectedSport === button.id ? 'default' : 'outline';
                const showStarIcon = button.id === 'favorites';
                
                return (
                    <MatchesFilterButton
                        key={button.id}
                        variant={variant}
                        size="sm"
                        onClick={() => onSportChange(button.id)}
                        disabled={button.disabled}
                    >
                        {showStarIcon && <Star className="w-4 h-4 mr-1" />}
                        {button.label}
                    </MatchesFilterButton>
                );
            })}
        </div>
    );
}
