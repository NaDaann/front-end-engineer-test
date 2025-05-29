import { useMemo } from 'react';
import type { Sport } from '@/types';
import type { FilterButtonConfig } from './types';
import { FILTER_BUTTON_CONFIGS } from './config';

export function useFilterButtons(
    sports: Sport[],
    favoriteCategories: string[],
): FilterButtonConfig[] {
    return useMemo(() => {
        const baseButtons: FilterButtonConfig[] = [FILTER_BUTTON_CONFIGS.all];

        // Only include favorites button if there are favorite categories
        if (favoriteCategories && favoriteCategories.length > 0) {
            baseButtons.push(FILTER_BUTTON_CONFIGS.favorites);
        }

        // Handle null/undefined sports array
        const sportButtons: FilterButtonConfig[] = (sports || []).map((sport) => ({
            id: sport.id,
            type: 'sport' as const,
            label: `${sport.icon} ${sport.name}`,
        }));

        return [...baseButtons, ...sportButtons];
    }, [sports, favoriteCategories]);
}
