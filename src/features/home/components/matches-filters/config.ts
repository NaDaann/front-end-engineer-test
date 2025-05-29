export const MATCHES_FILTERS_DEFAULTS = {
    className: '',
    placeholder: 'Buscar por time...',
    searchTerm: '',
    selectedSport: 'all',
};

export const FILTER_BUTTON_STYLES = {
    container: 'flex gap-2 flex-wrap',
    searchContainer: 'flex-1',
    searchInputContainer: 'relative',
    searchIcon: 'absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4',
    searchInput: 'pl-10',
    starIcon: 'w-4 h-4 mr-1',
};

export const FILTER_BUTTON_CONFIGS = {
    all: {
        id: 'all',
        type: 'all' as const,
        label: 'Todos',
    },
    favorites: {
        id: 'favorites',
        type: 'favorites' as const,
        label: 'Favoritos',
    },
};
