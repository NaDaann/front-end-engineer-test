import { JSX } from 'react';
import { LoadingStateType } from './types';

export const LOADING_STATE_ICONS: Record<LoadingStateType, JSX.Element> = {
    loading: (
        <div className="relative">
            <div className="w-12 h-12 border-4 border-green-100 border-t-green-700 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-r-green-700 rounded-full animate-spin animation-delay-75"></div>
        </div>
    ),
    'scroll-hint': (
        <svg
            className="w-4 h-4 text-gray-400 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
        </svg>
    ),
    complete: (
        <svg
            className="w-5 h-5 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
    ),
    error: (
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
        </svg>
    ),
};

export const LOADING_STATE_STYLES: Record<
    LoadingStateType,
    {
        container: string;
        iconBackground: string;
        titleColor: string;
        descriptionColor: string;
    }
> = {
    loading: {
        container: 'bg-gradient-to-r from-green-950 to-emerald-1000 border border-emerald-500',
        iconBackground: '',
        titleColor: 'text-green-800',
        descriptionColor: 'text-green-600',
    },
    'scroll-hint': {
        container: 'bg-gradient-to-r from-green-950 to-emerald-1000 border border-emerald-500',
        iconBackground: '',
        titleColor: 'text-gray-600',
        descriptionColor: 'text-gray-500',
    },
    complete: {
        container: 'bg-gradient-to-r from-green-950 to-emerald-1000 border border-emerald-500',
        iconBackground: 'bg-green-100',
        titleColor: 'text-green-800',
        descriptionColor: 'text-green-600',
    },
    error: {
        container: 'bg-red-600 border border-red-200',
        iconBackground: 'bg-red-100',
        titleColor: 'text-red-800',
        descriptionColor: 'text-red-700',
    },
};

export const LOADING_STATE_CONTENT: Record<
    LoadingStateType,
    {
        title: string;
        description: string;
    }
> = {
    loading: {
        title: 'Carregando odds',
        description: 'Aguarde enquanto buscamos mais conteúdo...',
    },
    'scroll-hint': {
        title: 'Role para baixo para carregar mais',
        description: '',
    },
    complete: {
        title: 'Todas as odds foram carregadas',
        description: 'Você visualizou todo o conteúdo disponível',
    },
    error: {
        title: 'Ops! Algo deu errado',
        description: 'Erro ao carregar conteúdo',
    },
};
