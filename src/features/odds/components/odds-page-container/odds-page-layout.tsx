'use client';

import type { OddsPageLayoutProps } from './types';
import { useOddsPageLayoutClassName } from './hooks';

export function OddsPageLayout({ children, className }: OddsPageLayoutProps) {
    const layoutClassName = useOddsPageLayoutClassName(className);

    return <div className={layoutClassName}>{children}</div>;
}
