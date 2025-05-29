'use client';

import type { ViewModeButtonGroupProps } from './types';
import { useViewModeButtonGroupClassName } from './hooks';

export function ViewModeButtonGroup({ children, className }: ViewModeButtonGroupProps) {
    const buttonGroupClassName = useViewModeButtonGroupClassName();

    return <div className={`${buttonGroupClassName} ${className || ''}`}>{children}</div>;
}
