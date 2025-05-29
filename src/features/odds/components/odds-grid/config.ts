import type { AnimationVariants } from './types';

export const ODDS_GRID_DEFAULTS = {
    isLoading: false,
    className: '',
    skeletonCount: 6,
};

export const ODDS_GRID_LAYOUT_CLASSES = {
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
    list: 'space-y-4',
};

export const ODDS_GRID_LOADING_CLASSES = {
    container: 'space-y-4',
    skeleton: 'rounded-lg h-32 animate-pulse',
};

export const ODDS_GRID_EMPTY_STATE = {
    title: 'Nenhuma odd encontrada',
    description: 'Tente ajustar seus filtros para encontrar mais resultados.',
    className: 'text-center py-12',
    titleClassName: 'text-gray-500 text-lg mb-2',
    descriptionClassName: 'text-gray-400',
};

export const ODDS_GRID_ANIMATION_VARIANTS: {
    container: AnimationVariants;
    item: AnimationVariants;
} = {
    container: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    },
    item: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    },
};

export const ODDS_GRID_HOT_ODDS_CONFIG = {
    enabled: true,
    refetchInterval: 30000,
};
