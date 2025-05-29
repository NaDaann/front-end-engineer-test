import { useMemo } from 'react';
import { LIST_ITEM_STATUS_CONFIGS } from './config';
import type { OddWithMatch } from '@/hooks/use-odds';

export function useOddListItemStatus(matchStatus: string) {
    return useMemo(() => {
        return LIST_ITEM_STATUS_CONFIGS[matchStatus] || LIST_ITEM_STATUS_CONFIGS.upcoming;
    }, [matchStatus]);
}

export function useOddListItemStatusClassName(odd: OddWithMatch) {
    const status = useOddListItemStatus(odd.match.status);

    return useMemo(() => {
        const pulseAnimation = status.pulse ? 'animate-pulse' : '';
        return `inline-flex items-center px-2 py-1 text-xs font-medium text-white rounded ${status.color} ${pulseAnimation}`;
    }, [status]);
}

export function useOddListItemContainerClassName(isHot: boolean, customClassName?: string) {
    return useMemo(() => {
        const baseClassName =
            'group relative border rounded-lg p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden';
        const variantClassName = isHot
            ? 'border-orange-400 bg-gradient-to-br from-orange-900 to-red-1000 hover:border-orange-1000'
            : 'border-gray-200 hover:border-gray-300';

        return `${baseClassName} ${variantClassName} ${customClassName || ''}`.trim();
    }, [isHot, customClassName]);
}

export function useOddListItemOddsClassName(isHot: boolean) {
    return useMemo(() => {
        const baseClassName =
            'text-xl font-bold mb-1 group-hover:scale-105 transition-all duration-200';
        const colorClassName = isHot
            ? 'text-orange-600 group-hover:text-orange-500'
            : 'text-green-600 group-hover:text-green-500';

        return `${baseClassName} ${colorClassName}`;
    }, [isHot]);
}
