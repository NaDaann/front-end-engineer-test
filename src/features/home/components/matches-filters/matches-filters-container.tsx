import { Card, CardContent } from '@/components/ui/card';
import type { MatchesFiltersContainerProps } from './types';
import { MATCHES_FILTERS_DEFAULTS } from './config';

export function MatchesFiltersContainer({
    children,
    className = MATCHES_FILTERS_DEFAULTS.className,
}: MatchesFiltersContainerProps) {
    return (
        <Card>
            <CardContent className={`p-4 ${className}`}>
                <div className="flex flex-col gap-4">{children}</div>
            </CardContent>
        </Card>
    );
}
