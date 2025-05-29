'use client';

import { Calendar } from 'lucide-react';
import { MatchCardMetaProps } from './types';
import { formatDate } from '@/lib/utils';

export function MatchCardMeta({ match }: MatchCardMetaProps) {
    return (
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center space-x-1">
                <Calendar className={`w-4 h-4`} />
                <span>{formatDate(match.startTime ?? undefined)}</span>
            </div>
        </div>
    );
}
