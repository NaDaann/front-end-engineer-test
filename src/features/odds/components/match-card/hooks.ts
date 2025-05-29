import { useMemo } from 'react';
import { STATUS_CONFIG } from './config';
import { Match } from '@/types';

export function useMatchStatus(match: Match) {
    return useMemo(() => {
        return STATUS_CONFIG[match.status] || STATUS_CONFIG.upcoming;
    }, [match.status]);
}

export function useStatusClassName(pulse?: boolean) {
    return useMemo(() => {
        const pulseAnimation = pulse ? 'animate-pulse' : '';
        return `inline-flex items-center px-2 py-1 text-xs font-medium text-white rounded ${pulseAnimation}`;
    }, [pulse]);
}
