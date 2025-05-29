import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';
import { useOddCardStatus, useOddCardStatusClassName } from './hooks';
import type { OddCardHeaderProps } from './types';

export function OddCardHeader({ odd }: OddCardHeaderProps) {
    const status = useOddCardStatus(odd.match.status);
    const statusClassName = useOddCardStatusClassName(odd);

    return (
        <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-1 group-hover:text-gray-700 transition-colors duration-200">
                <b>
                    {odd.match.homeTeam} vs {odd.match.awayTeam}
                </b>
            </h3>
            <p className="text-sm text-gray-600 mb-2">
                {odd.sport.name} • {formatDate(odd.match.startTime)}
            </p>
            <Badge className={statusClassName}>{status.text}</Badge>
        </div>
    );
}
