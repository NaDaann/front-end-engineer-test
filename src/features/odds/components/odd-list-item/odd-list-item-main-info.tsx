'use client';

import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';
import type { OddListItemMainInfoProps } from './types';
import { useOddListItemStatus, useOddListItemStatusClassName } from './hooks';
import { LIST_ITEM_GRID_LAYOUT } from './config';

export function OddListItemMainInfo({ odd }: OddListItemMainInfoProps) {
    const status = useOddListItemStatus(odd.match.status);
    const statusClassName = useOddListItemStatusClassName(odd);

    return (
        <div className={LIST_ITEM_GRID_LAYOUT.mainInfo}>
            <h3 className="font-medium text-gray-900 mb-1 group-hover:text-gray-700 transition-colors duration-200">
                {odd.match.homeTeam} vs {odd.match.awayTeam}
            </h3>
            <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-600">{odd.sport.name}</span>
                <Badge className={statusClassName}>{status.text}</Badge>
            </div>
            <p className="text-xs text-gray-500">{formatDate(odd.match.startTime)}</p>
        </div>
    );
}
