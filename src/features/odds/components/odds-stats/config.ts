import { TrendingUp, Users, FileText, Trophy } from 'lucide-react';
import type { StatCardData } from './types';

export const ODDS_STATS_DEFAULTS = {
    className: '',
    loadingMessage: 'Carregando estatísticas...',
};

export const ODDS_STATS_CLASSES = {
    container: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8',
    loading: 'text-center text-gray-500',
};

export const ODDS_STATS_CARD_CLASSES = {
    card: 'relative overflow-hidden border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300',
    cardBackground: 'absolute inset-0 opacity-5',
    backgroundCircle1:
        'absolute top-0 right-0 w-20 h-20 rounded-full bg-white transform translate-x-8 -translate-y-8',
    backgroundCircle2:
        'absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white transform -translate-x-6 translate-y-6',
    header: 'flex flex-row items-center justify-between space-y-0 pb-3 relative z-10',
    title: 'text-sm font-semibold text-gray-700 dark:text-gray-300',
    iconContainer: 'p-2 rounded-lg shadow-lg',
    icon: 'h-4 w-4 text-white',
    content: 'relative z-10',
    contentSpace: 'space-y-2',
    value: 'text-3xl font-bold bg-clip-text text-transparent',
    subtitleContainer: 'flex items-center gap-1',
    subtitleDot: 'w-2 h-2 rounded-full',
    subtitle: 'text-sm text-gray-600 dark:text-gray-400 font-medium',
    animatedBorder:
        'absolute inset-0 rounded-lg opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none',
};

export const ODDS_STATS_CARD_CONFIGS: Omit<StatCardData, 'value' | 'subtitle'>[] = [
    {
        title: 'Total de Odds',
        icon: TrendingUp,
        gradient: 'from-blue-500 to-cyan-500',
        bgGradient: 'from-blue-50 to-cyan-50',
        darkBgGradient: 'dark:from-blue-950/20 dark:to-cyan-950/20',
    },
    {
        title: 'Casas de Apostas',
        icon: Users,
        gradient: 'from-emerald-500 to-teal-500',
        bgGradient: 'from-emerald-50 to-teal-50',
        darkBgGradient: 'dark:from-emerald-950/20 dark:to-teal-950/20',
    },
    {
        title: 'ODDs carregadas',
        icon: FileText,
        gradient: 'from-purple-500 to-pink-500',
        bgGradient: 'from-purple-50 to-pink-50',
        darkBgGradient: 'dark:from-purple-950/20 dark:to-pink-950/20',
    },
    {
        title: 'Esportes',
        icon: Trophy,
        gradient: 'from-orange-500 to-red-500',
        bgGradient: 'from-orange-50 to-red-50',
        darkBgGradient: 'dark:from-orange-950/20 dark:to-red-950/20',
    },
];
