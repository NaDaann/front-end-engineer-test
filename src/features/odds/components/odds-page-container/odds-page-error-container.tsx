'use client';

import { ErrorState } from '../error-state';
import type { OddsPageErrorContainerProps } from './types';

export function OddsPageErrorContainer({ error, onRetry, className }: OddsPageErrorContainerProps) {
    return (
        <div className={className}>
            <ErrorState error={error} onRetry={onRetry} />
        </div>
    );
}
