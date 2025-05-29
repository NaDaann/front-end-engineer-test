import { Button } from '@/components/ui/button';
import { LoadingRetryButtonProps } from './types';

export function LoadingRetryButton({ onRetry, error }: LoadingRetryButtonProps) {
    return (
        <div className="w-full">
            <p className="text-red-700 text-sm text-center mb-6">{error}</p>
            <Button
                onClick={onRetry}
                variant="outline"
                className="w-full bg-black/40 hover:bg-black/80 border-red-300 text-red-700 hover:text-red-800 transition-colors duration-200"
            >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                </svg>
                Tentar novamente
            </Button>
        </div>
    );
}
