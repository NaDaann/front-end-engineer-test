import { JSX } from 'react';
import { EmptyStateType } from './types';

export const EMPTY_STATE_ICONS: Record<EmptyStateType, JSX.Element> = {
    filter: (
        <svg
            className="w-9 h-9 text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
            />
        </svg>
    ),
    data: (
        <svg
            className="w-9 h-9 text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
        </svg>
    ),
    error: (
        <svg
            className="w-9 h-9 text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
        </svg>
    ),
    search: (
        <svg
            className="w-9 h-9 text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
    ),
};

export const EMPTY_STATE_SUGGESTIONS: Record<EmptyStateType, string[]> = {
    filter: [
        'Remova alguns filtros aplicados',
        'Experimente critérios mais amplos',
        'Verifique se há erros de digitação',
    ],
    data: [
        'Verifique sua conexão com a internet',
        'Tente novamente em alguns minutos',
        'Entre em contato com o suporte',
    ],
    error: ['Recarregue a página', 'Verifique sua conexão', 'Tente novamente mais tarde'],
    search: [
        'Verifique os filtros aplicados',
        'Tente expandir sua busca',
        'Considere outros esportes',
    ],
};

export const EMPTY_STATE_DEFAULTS = {
    title: 'Nenhuma odd encontrada',
    description: 'Tente ajustar seus filtros para encontrar mais resultados.',
    type: 'search' as EmptyStateType,
    showSuggestions: true,
};
