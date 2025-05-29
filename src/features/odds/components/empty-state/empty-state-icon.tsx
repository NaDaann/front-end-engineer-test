import { EmptyStateIconProps } from './types';
import { useEmptyStateIcon } from './hooks';

export function EmptyStateIcon({ type }: EmptyStateIconProps) {
    const icon = useEmptyStateIcon(type);

    return (
        <div className="relative">
            <div className="flex items-center justify-center w-16 h-16 bg-black/75 rounded-full">
                {icon}
            </div>
            <div className="absolute -top-1 -right-2 w-4 h-4 bg-black/75 rounded-full opacity-60"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-black/85 rounded-full opacity-40"></div>
        </div>
    );
}
