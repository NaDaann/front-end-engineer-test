import { useCallback, useMemo } from 'react';
import type { ViewMode } from '../../types';
import { VIEW_MODE_STYLES } from './config';

export function useViewModeButtonClassName(
    isActive: boolean,
    isFirst: boolean,
    isLast: boolean,
): string {
    return useMemo(() => {
        const baseClasses = VIEW_MODE_STYLES.button.base;

        const stateClasses = isActive
            ? VIEW_MODE_STYLES.button.active
            : VIEW_MODE_STYLES.button.inactive;

        const positionClasses = isFirst
            ? VIEW_MODE_STYLES.button.first
            : isLast
              ? VIEW_MODE_STYLES.button.last
              : '';

        return `${baseClasses} ${stateClasses} ${positionClasses}`.trim();
    }, [isActive, isFirst, isLast]);
}

export function useViewModeHandler(mode: ViewMode, onViewModeChange: (mode: ViewMode) => void) {
    return useCallback(() => {
        onViewModeChange(mode);
    }, [mode, onViewModeChange]);
}

export function useViewModeContainerClassName(className?: string): string {
    return useMemo(() => {
        return `${VIEW_MODE_STYLES.container} ${className || ''}`.trim();
    }, [className]);
}

export function useViewModeButtonGroupClassName(): string {
    return VIEW_MODE_STYLES.buttonGroup;
}

export function useViewModeLabelClassName(): string {
    return VIEW_MODE_STYLES.label;
}
