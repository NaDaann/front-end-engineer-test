'use client';

import { Badge } from '@/components/ui/badge';
import { MatchCardHeaderProps } from './types';
import { useMatchStatus, useStatusClassName } from './hooks';

export function MatchCardHeader({ match }: MatchCardHeaderProps) {
    const status = useMatchStatus(match);
    const statusClassName = useStatusClassName(status.pulse);

    return (
        <div className="flex items-center justify-between mb-3">
            <h3 className={`font-bold text-lg`}>
                {match.homeTeam} vs {match.awayTeam}
            </h3>
            <Badge className={`${statusClassName} ${status.color} text-color-white`}>
                {status.text}
            </Badge>
        </div>
    );
}
