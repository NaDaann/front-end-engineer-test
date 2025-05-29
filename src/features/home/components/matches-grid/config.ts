export const MATCHES_GRID_CONFIG = {
    grid: {
        gap: 'gap-6',
        columns: {
            mobile: 'grid-cols-1',
            tablet: 'md:grid-cols-2',
            desktop: 'lg:grid-cols-3',
        },
    },
    loading: {
        defaultCount: 6,
    },
    emptyState: {
        icon: {
            size: 'w-12 h-12',
            color: 'text-gray-400',
        },
        text: {
            color: 'text-gray-600',
        },
        messages: {
            noFavorites: 'Adicione categorias aos favoritos para ver jogos filtrados',
            noMatches: 'Nenhum jogo encontrado',
        },
    },
} as const;
