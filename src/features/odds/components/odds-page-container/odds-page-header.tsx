'use client';

import { ViewModeToggle } from '../view-mode-toggle';
import type { OddsPageHeaderProps } from './types';
import { ODDS_PAGE_DEFAULTS, ODDS_PAGE_HEADER_CLASSES } from './config';

export function OddsPageHeader({
    title = ODDS_PAGE_DEFAULTS.title,
    description = ODDS_PAGE_DEFAULTS.description,
    viewMode,
    onViewModeChange,
    className,
}: OddsPageHeaderProps) {
    return (
        <div className={`${ODDS_PAGE_HEADER_CLASSES.container} ${className || ''}`}>
            <div className={ODDS_PAGE_HEADER_CLASSES.textSection}>
                <h1 className={ODDS_PAGE_HEADER_CLASSES.title}>{title}</h1>
                <p className={ODDS_PAGE_HEADER_CLASSES.description}>{description}</p>
            </div>
            <ViewModeToggle viewMode={viewMode} onViewModeChange={onViewModeChange} />
        </div>
    );
}
