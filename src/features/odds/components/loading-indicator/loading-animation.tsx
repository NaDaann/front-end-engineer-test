import { LoadingAnimationProps } from './types';

export function LoadingAnimation({ type }: LoadingAnimationProps) {
    if (type === 'loading') {
        return (
            <div className="flex gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-150"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-300"></div>
            </div>
        );
    }

    if (type === 'scroll-hint') {
        return <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>;
    }

    return null;
}
