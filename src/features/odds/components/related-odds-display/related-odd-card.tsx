import React from 'react';
import { OddCard } from '../odd-card';
import { useHotOddCheck } from '@/hooks/use-hot-odd-check';
import type { RelatedOddCardProps } from './types';

export function RelatedOddCard({ relatedOdd, className }: RelatedOddCardProps) {
    const { odd } = relatedOdd;
    const { isHot } = useHotOddCheck(odd.id);

    return <OddCard odd={odd} isHot={isHot} className={className} />;
}
