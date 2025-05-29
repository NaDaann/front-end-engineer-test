import { ErrorStateContentProps } from './types';

export function ErrorStateContent({ title, errorMessage }: ErrorStateContentProps) {
    return (
        <div className="text-center space-y-3">
            <h3 className="text-gray-700 font-semibold text-lg">
                <b>{title}</b>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{errorMessage}</p>
        </div>
    );
}
