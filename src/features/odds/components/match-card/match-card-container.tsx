'use client';

import { MatchCardContainerProps } from './types';

export function MatchCardContainer({ children }: MatchCardContainerProps) {
    return (
        <div
            className={`group relative rounded-lg border p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden`}
        >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            {children}
        </div>
    );
}
