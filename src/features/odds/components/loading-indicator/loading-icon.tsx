import { LoadingIconProps } from './types';
import { useLoadingStateIcon, useLoadingStateStyles } from './hooks';

export function LoadingIcon({ type }: LoadingIconProps) {
    const icon = useLoadingStateIcon(type);
    const styles = useLoadingStateStyles(type);

    if (type === 'loading') {
        return <div>{icon}</div>;
    }

    if (type === 'scroll-hint') {
        return <div>{icon}</div>;
    }

    return (
        <div
            className={`flex items-center justify-center w-10 h-10 ${styles.iconBackground} rounded-full`}
        >
            {icon}
        </div>
    );
}
