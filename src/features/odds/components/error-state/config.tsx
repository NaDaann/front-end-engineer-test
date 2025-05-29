import { JSX } from 'react';

export const ERROR_STATE_ICON: JSX.Element = (
    <svg className="w-9 h-9 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
        />
    </svg>
);

export const ERROR_STATE_SUGGESTIONS: string[] = [
    'Recarregue a página',
    'Verifique sua conexão com a internet',
    'Tente novamente em alguns minutos',
    'Entre em contato com o suporte se o problema persistir',
];

export const ERROR_STATE_DEFAULTS = {
    title: 'Erro ao carregar odds',
    retryText: 'Tentar novamente',
    showSuggestions: true,
};
