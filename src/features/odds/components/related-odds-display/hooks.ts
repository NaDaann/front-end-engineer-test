import { useMemo } from 'react';
import { useRelatedOdds } from '@/hooks/use-related-odds';
import { cn } from '@/lib/utils';

interface UseRelatedOddsDataParams {
    oddId: string;
    maxItems: number;
}

export function useRelatedOddsData({ oddId, maxItems }: UseRelatedOddsDataParams) {
    const filters = useMemo(() => ({ limit: maxItems }), [maxItems]);
    return useRelatedOdds(oddId, filters);
}

export function useRelatedOddsLayoutClassName(className?: string) {
    return cn('space-y-6', className);
}

export function useRelatedOddsHeaderClassName(className?: string) {
    return cn('flex items-center justify-between', className);
}

export function useRelatedOddsContentClassName(className?: string) {
    return cn('grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6', className);
}

export function useRelatedOddsFooterClassName(className?: string) {
    return cn('pt-4 border-t border-gray-200', className);
}

export function useRelatedOddsErrorClassName(className?: string) {
    return cn('border-red-200', className);
}

export function useRelatedOddsEmptyClassName(className?: string) {
    return cn('', className);
}

export function useRelatedOddsMoreIndicatorClassName(className?: string) {
    return cn('text-center pt-2', className);
}
