import type { ViewMode } from '../../types';

export interface ViewModeToggleProps {
    viewMode: ViewMode;
    onViewModeChange: (mode: ViewMode) => void;
    className?: string;
}

export interface ViewModeButtonProps {
    isActive: boolean;
    mode: ViewMode;
    icon: React.ReactNode;
    onClick: () => void;
    className?: string;
}

export interface ViewModeConfig {
    value: ViewMode;
    label: string;
    ariaLabel: string;
}

export interface ViewModeContainerProps {
    children: React.ReactNode;
    className?: string;
}

export interface ViewModeLabelProps {
    text: string;
    className?: string;
}

export interface ViewModeButtonGroupProps {
    children: React.ReactNode;
    className?: string;
}
