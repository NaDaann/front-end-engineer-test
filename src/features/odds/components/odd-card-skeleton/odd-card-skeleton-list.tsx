'use client';

import { OddCardSkeleton } from './odd-card-skeleton';
import { useRandomHotState } from './hooks';
import { DEFAULT_GRID_CONFIG } from './config';
import type { OddCardSkeletonListProps } from './types';

interface SkeletonItemProps {
    index: number;
}

function SkeletonItem({ index }: SkeletonItemProps) {
    const isHot = useRandomHotState();

    return <OddCardSkeleton key={index} isHot={isHot} />;
}

export function OddCardSkeletonList({
    count = 6,
    className = '',
    colsByScreenSize = DEFAULT_GRID_CONFIG,
}: OddCardSkeletonListProps) {
    const gridClasses = `grid gap-4 grid-cols-${colsByScreenSize.sm} md:grid-cols-${colsByScreenSize.md} lg:grid-cols-${colsByScreenSize.lg}`;

    return (
        <div className={`${gridClasses} ${className}`}>
            {Array.from({ length: count }, (_, index) => (
                <SkeletonItem key={index} index={index} />
            ))}
        </div>
    );
}
