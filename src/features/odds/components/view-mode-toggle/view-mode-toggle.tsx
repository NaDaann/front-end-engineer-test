'use client';

import { Button } from '@/components/ui/button';
import { Grid, List } from 'lucide-react';
import type { ViewModeToggleProps } from './types';
import { ViewModeContainer } from './view-mode-container';
import { ViewModeLabel } from './view-mode-label';
import { ViewModeButtonGroup } from './view-mode-button-group';
import { VIEW_MODE_CONFIGS, VIEW_MODE_LABELS } from './config';

export function ViewModeToggle({ viewMode, onViewModeChange, className }: ViewModeToggleProps) {
    return (
        <ViewModeContainer className={className}>
            <ViewModeLabel text={VIEW_MODE_LABELS.label} />
            <ViewModeButtonGroup>
                <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => onViewModeChange('grid')}
                    className="rounded-r-none"
                    aria-pressed={viewMode === 'grid'}
                    aria-label={VIEW_MODE_CONFIGS.grid.ariaLabel}
                >
                    <Grid className="w-4 h-4" />
                </Button>
                <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => onViewModeChange('list')}
                    className="rounded-l-none"
                    aria-pressed={viewMode === 'list'}
                    aria-label={VIEW_MODE_CONFIGS.list.ariaLabel}
                >
                    <List className="w-4 h-4" />
                </Button>
            </ViewModeButtonGroup>
        </ViewModeContainer>
    );
}
