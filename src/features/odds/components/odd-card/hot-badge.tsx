import { Flame } from 'lucide-react';
import type { HotBadgeProps } from './types';

export function HotBadge({ className }: HotBadgeProps) {
    return (
        <div className={className}>
            <Flame className="w-4 h-4 text-white" /> HOT
        </div>
    );
}
