'use client';

import { Flame } from 'lucide-react';
import type { OddListItemHotBadgeProps } from './types';
import { LIST_ITEM_HOT_STYLES } from './config';

export function OddListItemHotBadge({ className }: OddListItemHotBadgeProps) {
    return (
        <div className={`${LIST_ITEM_HOT_STYLES.hotBadge} ${className || ''}`}>
            <Flame className="w-5 h-5 text-white" />
            HOT
        </div>
    );
}
