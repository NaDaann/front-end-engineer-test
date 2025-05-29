import type { ViewModeConfig } from './types';

export const VIEW_MODE_CONFIGS: Record<string, Omit<ViewModeConfig, 'icon'>> = {
    grid: {
        value: 'grid',
        label: 'Visualização em Grade',
        ariaLabel: 'Alternar para visualização em grade',
    },
    list: {
        value: 'list',
        label: 'Visualização em Lista',
        ariaLabel: 'Alternar para visualização em lista',
    },
};

export const VIEW_MODE_STYLES = {
    container: 'flex items-center gap-2',
    label: 'text-sm font-medium',
    buttonGroup: 'flex border rounded-md',
    button: {
        base: 'transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        active: 'bg-blue-600 text-white border-blue-600',
        inactive: 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-gray-900',
        first: 'rounded-r-none border-r-0',
        last: 'rounded-l-none border-l-0',
    },
};

export const VIEW_MODE_LABELS = {
    label: 'Visualização:',
} as const;
