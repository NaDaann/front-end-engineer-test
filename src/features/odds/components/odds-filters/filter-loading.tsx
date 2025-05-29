import { FilterLoadingProps } from './types';
import { FILTER_LABELS } from './config';

export function FilterLoading({ isLoading }: FilterLoadingProps) {
    if (!isLoading) return null;

    return (
        <div className="flex items-center justify-center py-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-4 h-4 border-2 border-gray-300 border-t-green-800 rounded-full animate-spin" />
                {FILTER_LABELS.loadingText}
            </div>
        </div>
    );
}
