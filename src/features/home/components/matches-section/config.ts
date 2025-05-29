export const MATCHES_SECTION_DEFAULTS = {
    title: 'Jogos e Odds',
    statusText: 'Atualizadas em tempo real',
    showStatus: true,
} as const;

export const MATCHES_SECTION_STYLES = {
    container: 'space-y-6',
    header: {
        wrapper: 'flex items-center justify-between',
        title: 'text-2xl font-bold text-gray-900',
        status: {
            wrapper: 'flex items-center space-x-2',
            icon: 'w-5 h-5 text-green-500',
            text: 'text-sm text-gray-600',
        },
    },
} as const;
