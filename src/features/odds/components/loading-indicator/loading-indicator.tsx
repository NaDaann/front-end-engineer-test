'use client';

import { LoadingIndicatorProps } from './types';
import { useLoadingState, useLoadingStateStyles, useLoadingStateContent } from './hooks';
import { LoadingIcon } from './loading-icon';
import { LoadingContent } from './loading-content';
import { LoadingRetryButton } from './loading-retry-button';
import { LoadingAnimation } from './loading-animation';

export function LoadingIndicator({
    isVisible,
    hasMore,
    onRetry,
    error,
    hasData = true,
}: LoadingIndicatorProps) {
    const loadingState = useLoadingState({ isVisible, hasMore, hasData, error });
    const styles = useLoadingStateStyles(loadingState);
    const content = useLoadingStateContent(loadingState);

    if (!hasData && !hasMore) {
        return <div className="text-center py-8 text-transparent invisible"></div>;
    }

    if (error && onRetry) {
        const errorMessage =
            typeof error === 'string' ? error : error?.message || 'Erro desconhecido';

        return (
            <div className="flex flex-col items-center justify-center py-12 px-6">
                <div className={`${styles.container} rounded-xl p-6 max-w-md w-full shadow-sm`}>
                    <div className="flex flex-col items-center gap-4">
                        <LoadingIcon type={loadingState} />
                        <h3 className={`${styles.titleColor} font-semibold text-center`}>
                            {content.title}
                        </h3>
                        <LoadingRetryButton onRetry={onRetry} error={errorMessage} />
                    </div>
                </div>
            </div>
        );
    }

    if (!hasMore) {
        return (
            <div className="flex flex-col items-center justify-center py-8 px-6">
                <div className={`${styles.container} rounded-xl p-6 max-w-sm w-full shadow-sm`}>
                    <div className="flex flex-col items-center gap-3">
                        <LoadingIcon type={loadingState} />
                        <div className="text-center">
                            <p className={`${styles.titleColor} font-medium text-sm`}>
                                {content.title}
                            </p>
                            <p className={`${styles.descriptionColor} text-xs mt-1 opacity-80`}>
                                {content.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!isVisible) {
        return (
            <div className="flex justify-center items-center py-6 px-4">
                <div className={`${styles.container} rounded-lg px-6 py-3 shadow-sm`}>
                    <div className="flex items-center gap-3">
                        <LoadingAnimation type={loadingState} />
                        <LoadingContent title={content.title} description={content.description} />
                        <LoadingIcon type={loadingState} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center py-10 px-6">
            <div className={`${styles.container} rounded-xl p-8 max-w-sm w-full shadow-sm`}>
                <div className="flex flex-col items-center gap-4">
                    <LoadingIcon type={loadingState} />
                    <div className={`${styles.titleColor}`}>
                        <LoadingContent title={content.title} description={content.description} />
                    </div>
                    <LoadingAnimation type={loadingState} />
                </div>
            </div>
        </div>
    );
}
