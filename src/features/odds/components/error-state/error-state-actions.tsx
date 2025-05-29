import { Button } from '@/components/ui/button';
import { ErrorStateActionsProps } from './types';
import { ERROR_STATE_DEFAULTS } from './config';

export function ErrorStateActions({
    onRetry,
    retryText = ERROR_STATE_DEFAULTS.retryText,
}: ErrorStateActionsProps) {
    return (
        <div className="flex justify-center w-full">
            <Button
                onClick={onRetry}
                variant="outline"
                className="bg-white/10 border-white/20 text-gray-700 hover:bg-white/20 hover:border-white/30 transition-colors"
            >
                {retryText}
            </Button>
        </div>
    );
}
