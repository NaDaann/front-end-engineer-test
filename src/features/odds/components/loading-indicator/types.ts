export type LoadingStateType = 'loading' | 'scroll-hint' | 'complete' | 'error';

export interface LoadingIndicatorProps {
    isVisible: boolean;
    hasMore: boolean;
    hasData?: boolean;
    onRetry?: () => void;
    error?: Error | string | null;
}

export interface LoadingStateConfig {
    type: LoadingStateType;
    title: string;
    description: string;
    showIcon?: boolean;
    showIndicator?: boolean;
    showRetryButton?: boolean;
}

export interface LoadingIconProps {
    type: LoadingStateType;
}

export interface LoadingContentProps {
    title: string;
    description: string;
}

export interface LoadingRetryButtonProps {
    onRetry: () => void;
    error: string;
}

export interface LoadingAnimationProps {
    type: LoadingStateType;
}
