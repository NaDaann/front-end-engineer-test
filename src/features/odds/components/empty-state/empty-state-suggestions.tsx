import { EmptyStateSuggestionsProps } from './types';
import { useEmptyStateSuggestions } from './hooks';

export function EmptyStateSuggestions({ type, show }: EmptyStateSuggestionsProps) {
    const suggestions = useEmptyStateSuggestions(type);

    if (!show) return null;

    return (
        <div className="bg-black/75 border border-gray-100 rounded-lg p-4 w-full">
            <h4 className="text-white font-medium text-sm mb-3">
                <b>Sugestões:</b>
            </h4>
            <ul className="space-y-2 text-xs text-white/95">
                {suggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-300 rounded-full"></div>
                        <span>{suggestion}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
