import { useMemo } from 'react';
import { ERROR_STATE_ICON, ERROR_STATE_SUGGESTIONS } from './config';

export function useErrorStateIcon() {
    return useMemo(() => ERROR_STATE_ICON, []);
}

export function useErrorStateSuggestions() {
    return useMemo(() => ERROR_STATE_SUGGESTIONS, []);
}

export function useErrorMessage(error: Error | string) {
    return useMemo(() => {
        return typeof error === 'string'
            ? error
            : error?.message || 'Ocorreu um erro inesperado. Tente novamente.';
    }, [error]);
}
