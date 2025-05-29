'use client';

import { useSkeletonContainerClasses } from './hooks';
import type { OddCardSkeletonContainerProps } from './types';

export function OddCardSkeletonContainer({
    isHot = false,
    children,
}: OddCardSkeletonContainerProps) {
    const containerClasses = useSkeletonContainerClasses(isHot);

    return <div className={containerClasses}>{children}</div>;
}
