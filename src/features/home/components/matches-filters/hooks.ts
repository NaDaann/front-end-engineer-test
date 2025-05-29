import { useMemo } from 'react';
import type { Sport } from '@/types';
import type { FilterButtonConfig } from './types';
import { FILTER_BUTTON_CONFIGS } from './config';

export function useFilterButtons(
    sports: Sport[],
    favoriteCategories: string[]
): FilterButtonConfig[] {
    return useMemo(() => {
        const baseButtons: FilterButtonConfig[] = [
            FILTER_BUTTON_CONFIGS.all,
            {
                ...FILTER_BUTTON_CONFIGS.favorites,
                disabled: favoriteCategories.length === 0,
            },
        ];

        const sportButtons: FilterButtonConfig[] = sports.map((sport) => ({
            id: sport.id,
            type: 'sport' as const,
            label: `${sport.icon} ${sport.name}`,
        }));

        return [...baseButtons, ...sportButtons];
    }, [sports, favoriteCategories]);
}
