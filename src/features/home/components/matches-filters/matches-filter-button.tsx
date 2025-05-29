import { Button } from '@/components/ui/button';
import type { MatchesFilterButtonProps } from './types';

export function MatchesFilterButton({
    variant,
    size,
    onClick,
    disabled = false,
    children,
}: MatchesFilterButtonProps) {
    return (
        <Button
            variant={variant}
            size={size}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </Button>
    );
}
