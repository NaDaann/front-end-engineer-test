// Configuration and constants for RelatedOddsDisplay component
export const RELATED_ODDS_DEFAULTS = {
    maxItems: 3,
    title: 'Odds Relacionadas',
} as const;

export const RELATED_ODDS_LAYOUT_CLASSES = {
    container: 'space-y-6',
} as const;

export const RELATED_ODDS_HEADER_CLASSES = {
    container: 'flex items-center justify-between',
    titleGroup: 'flex items-center gap-3',
    title: 'text-xl font-semibold text-gray-900',
    badge: 'text-sm',
} as const;

export const RELATED_ODDS_CONTENT_CLASSES = {
    grid: 'grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6',
} as const;

export const RELATED_ODDS_FOOTER_CLASSES = {
    container: 'pt-4 border-t border-gray-200',
    info: 'flex items-center justify-between text-sm text-gray-600',
    refreshButton: 'text-blue-600 hover:text-blue-800 transition-colors font-medium',
} as const;

export const RELATED_ODDS_ERROR_CLASSES = {
    card: 'border-red-200',
    content: 'pt-6',
    container: 'text-center',
    title: 'text-red-600 font-medium mb-2',
    message: 'text-sm text-gray-600 mb-4',
    button: 'px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium',
} as const;

export const RELATED_ODDS_EMPTY_CLASSES = {
    content: 'pt-6',
    container: 'text-center',
    title: 'text-gray-600 font-medium mb-2',
    message: 'text-sm text-gray-500',
} as const;

export const RELATED_ODDS_MORE_INDICATOR_CLASSES = {
    container: 'text-center pt-2',
    badge: 'text-sm',
} as const;

export const RELATED_ODDS_SKELETON_CONFIG = {
    colsByScreenSize: {
        sm: 1,
        md: 1,
        lg: 1,
    },
} as const;
