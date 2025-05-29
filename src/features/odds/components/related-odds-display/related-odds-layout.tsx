import React from 'react';
import { useRelatedOddsLayoutClassName } from './hooks';
import type { RelatedOddsLayoutProps } from './types';

export function RelatedOddsLayout({ children, className }: RelatedOddsLayoutProps) {
    return <div className={useRelatedOddsLayoutClassName(className)}>{children}</div>;
}
