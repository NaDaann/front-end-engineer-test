'use client';

import type { OddsGridEmptyStateProps } from './types';
import { ODDS_GRID_EMPTY_STATE } from './config';

export function OddsGridEmptyState({
    title = ODDS_GRID_EMPTY_STATE.title,
    description = ODDS_GRID_EMPTY_STATE.description,
    className = ODDS_GRID_EMPTY_STATE.className,
}: OddsGridEmptyStateProps) {
    return (
        <div className={className}>
            <div className={ODDS_GRID_EMPTY_STATE.titleClassName}>{title}</div>
            <p className={ODDS_GRID_EMPTY_STATE.descriptionClassName}>{description}</p>
        </div>
    );
}
