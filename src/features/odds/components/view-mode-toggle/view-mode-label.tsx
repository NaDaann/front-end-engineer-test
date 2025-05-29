'use client';

import type { ViewModeLabelProps } from './types';
import { useViewModeLabelClassName } from './hooks';

export function ViewModeLabel({ text, className }: ViewModeLabelProps) {
    const labelClassName = useViewModeLabelClassName();

    return <span className={`${labelClassName} ${className || ''}`}>{text}</span>;
}
