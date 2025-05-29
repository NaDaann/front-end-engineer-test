import { useMemo } from 'react';
import { EmptyStateType } from './types';
import { EMPTY_STATE_ICONS, EMPTY_STATE_SUGGESTIONS } from './config';

export function useEmptyStateIcon(type: EmptyStateType) {
    return useMemo(() => EMPTY_STATE_ICONS[type], [type]);
}

export function useEmptyStateSuggestions(type: EmptyStateType) {
    return useMemo(() => EMPTY_STATE_SUGGESTIONS[type], [type]);
}
