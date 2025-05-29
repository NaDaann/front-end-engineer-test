import { StatusConfig } from './types';

export const STATUS_CONFIG: Record<string, StatusConfig> = {
    upcoming: { color: 'bg-blue-700', text: 'Agendado' },
    live: { color: 'bg-red-600', text: 'Ao Vivo', pulse: true },
    finished: { color: 'bg-green-700', text: 'Finalizado' },
};

export const CARD_VARIANTS = {
    hot: {
        container:
            'border-orange-400 bg-gradient-to-br from-orange-900/20 to-red-900/20 hover:border-orange-300',
        title: 'bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent',
        calendarIcon: 'text-orange-500',
        oddContainer:
            'border-orange-700/50 bg-orange-900/20 hover:bg-orange-800/30 hover:border-orange-600/70',
        oddText: 'text-orange-400 group-hover/odd:text-orange-300',
    },
    normal: {
        container: 'border-gray-700 bg-gray-900 hover:border-gray-600',
        title: 'text-foreground',
        calendarIcon: '',
        oddContainer: 'border-gray-700 bg-gray-800 hover:bg-gray-700 hover:border-gray-600',
        oddText: 'text-green-400 group-hover/odd:text-green-300',
    },
} as const;

export const FLOATING_FLAMES_CONFIG = [
    {
        animate: {
            y: [0, -20, 0],
            x: [0, 10, -5, 0],
            rotate: [0, 15, -10, 0],
            opacity: [0.3, 0.8, 0.3],
        },
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0,
        },
        className: 'absolute bottom-2 right-8 z-20',
        size: 'w-5 h-5',
        color: 'text-orange-400',
    },
    {
        animate: {
            y: [0, -15, 0],
            x: [0, -8, 12, 0],
            rotate: [0, -20, 10, 0],
            opacity: [0.2, 0.6, 0.2],
        },
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
        },
        className: 'absolute bottom-6 right-4 z-20',
        size: 'w-4 h-4',
        color: 'text-red-400',
    },
    {
        animate: {
            y: [0, -25, 0],
            x: [0, 15, -10, 0],
            rotate: [0, 25, -15, 0],
            opacity: [0.4, 0.9, 0.4],
        },
        transition: {
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
        },
        className: 'absolute bottom-8 right-12 z-20',
        size: 'w-4 h-4',
        color: 'text-orange-500',
    },
] as const;
