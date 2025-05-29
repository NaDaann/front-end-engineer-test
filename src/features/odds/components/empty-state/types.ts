export type EmptyStateType = 'search' | 'filter' | 'data' | 'error';

export interface EmptyStateProps {
    title?: string;
    description?: string;
    type?: EmptyStateType;
    showSuggestions?: boolean;
}

export interface EmptyStateIconProps {
    type: EmptyStateType;
}

export interface EmptyStateSuggestionsProps {
    type: EmptyStateType;
    show: boolean;
}

export interface EmptyStateContentProps {
    title: string;
    description: string;
}
