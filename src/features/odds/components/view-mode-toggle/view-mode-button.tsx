'use client';

import { Button } from '@/components/ui/button';
import type { ViewModeButtonProps } from './types';
import { useViewModeHandler } from './hooks';

export function ViewModeButton({ isActive, mode, icon, onClick, className }: ViewModeButtonProps) {
    const handleClick = useViewModeHandler(mode, () => onClick());

    return (
        <Button
            variant={isActive ? 'default' : 'ghost'}
            size="sm"
            onClick={handleClick}
            className={className}
            aria-pressed={isActive}
        >
            {icon}
        </Button>
    );
}
