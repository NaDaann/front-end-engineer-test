'use client';

import { ErrorStateProps } from './types';
import { ERROR_STATE_DEFAULTS } from './config';
import { useErrorMessage } from './hooks';
import { ErrorStateIcon } from './error-state-icon';
import { ErrorStateContent } from './error-state-content';
import { ErrorStateSuggestions } from './error-state-suggestions';
import { ErrorStateActions } from './error-state-actions';
import { ErrorStateIndicator } from './error-state-indicator';

export function ErrorState({
    error,
    onRetry,
    title = ERROR_STATE_DEFAULTS.title,
    showSuggestions = ERROR_STATE_DEFAULTS.showSuggestions,
}: ErrorStateProps) {
    const errorMessage = useErrorMessage(error);

    return (
        <div className="flex flex-col items-center justify-center py-16 px-6">
            <div className="bg-gradient-to-r from-red-800 to-red-1000 border border-red-200 rounded-xl p-8 max-w-md w-full shadow-sm">
                <div className="flex flex-col items-center gap-6">
                    <ErrorStateIcon />
                    <ErrorStateContent title={title} errorMessage={errorMessage} />
                    <ErrorStateActions onRetry={onRetry} />
                    <ErrorStateSuggestions show={showSuggestions} />
                    <ErrorStateIndicator />
                </div>
            </div>
        </div>
    );
}
