import { LoadingContentProps } from './types';

export function LoadingContent({ title, description }: LoadingContentProps) {
    if (!description) {
        return <span className="text-gray-600 text-sm font-medium">{title}</span>;
    }

    return (
        <div className="text-center">
            <h3 className="font-semibold text-base mb-1">{title}</h3>
            <p className="text-sm opacity-80">{description}</p>
        </div>
    );
}
