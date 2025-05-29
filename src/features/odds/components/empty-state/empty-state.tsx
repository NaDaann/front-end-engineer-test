'use client';

import { EmptyStateProps } from './types';
import { EMPTY_STATE_DEFAULTS } from './config';
import { EmptyStateIcon } from './empty-state-icon';
import { EmptyStateContent } from './empty-state-content';
import { EmptyStateSuggestions } from './empty-state-suggestions';
import { EmptyStateIndicator } from './empty-state-indicator';

export function EmptyState({
    title = EMPTY_STATE_DEFAULTS.title,
    description = EMPTY_STATE_DEFAULTS.description,
    type = EMPTY_STATE_DEFAULTS.type,
    showSuggestions = EMPTY_STATE_DEFAULTS.showSuggestions,
}: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-6">
            <div className="bg-gradient-to-r from-red-800 to-red-1000 border border-gray-200 rounded-xl p-8 max-w-md w-full shadow-sm">
                <div className="flex flex-col items-center gap-6">
                    <EmptyStateIcon type={type} />
                    <EmptyStateContent title={title} description={description} />
                    <EmptyStateSuggestions type={type} show={showSuggestions} />
                    <EmptyStateIndicator />
                </div>
            </div>
        </div>
    );
}
