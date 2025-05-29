'use client';

import type { ViewModeContainerProps } from './types';
import { useViewModeContainerClassName } from './hooks';

export function ViewModeContainer({ children, className }: ViewModeContainerProps) {
    const containerClassName = useViewModeContainerClassName(className);

    return <div className={containerClassName}>{children}</div>;
}
