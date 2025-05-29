export interface ErrorStateProps {
    error: Error | string;
    onRetry: () => void;
    title?: string;
    showSuggestions?: boolean;
}

export interface ErrorStateContentProps {
    title: string;
    errorMessage: string;
}

export interface ErrorStateActionsProps {
    onRetry: () => void;
    retryText?: string;
}

export interface ErrorStateSuggestionsProps {
    show: boolean;
}
