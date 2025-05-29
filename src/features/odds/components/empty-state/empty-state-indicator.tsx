export function EmptyStateIndicator() {
    return (
        <div className="flex items-center gap-2 opacity-60">
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse animation-delay-150"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse animation-delay-300"></div>
        </div>
    );
}
