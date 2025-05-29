import type { StatusConfig } from './types';

export const ODD_CARD_DEFAULTS = {
    isHot: false,
    className: '',
};

export const STATUS_CONFIGS: Record<string, StatusConfig> = {
    upcoming: { color: 'bg-blue-700', text: 'Agendado' },
    live: { color: 'bg-red-600', text: 'Ao Vivo', pulse: true },
    finished: { color: 'bg-green-700', text: 'Finalizado' },
};

export const HOT_CARD_STYLES = {
    container:
        'border-orange-400 bg-gradient-to-br from-orange-900 to-red-1000 hover:border-orange-1000',
    default: 'border-gray-200 hover:border-gray-300',
    hotBadge:
        'absolute top-[40%] right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse shadow-lg flex items-center gap-1',
    shimmer:
        'absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent',
    oddsText: {
        hot: 'text-orange-600 group-hover:text-orange-500',
        default: 'text-green-600 group-hover:text-green-500',
    },
};
