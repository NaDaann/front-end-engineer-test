import { useMemo } from 'react';
import { MatchesSectionHeaderProps } from './types';
import { MATCHES_SECTION_DEFAULTS } from './config';

export function useMatchesSectionHeader(
    customTitle?: string,
    customShowStatus?: boolean,
    customStatusText?: string,
): MatchesSectionHeaderProps {
    return useMemo(
        () => ({
            title: customTitle ?? MATCHES_SECTION_DEFAULTS.title,
            showStatus: customShowStatus ?? MATCHES_SECTION_DEFAULTS.showStatus,
            statusText: customStatusText ?? MATCHES_SECTION_DEFAULTS.statusText,
        }),
        [customTitle, customShowStatus, customStatusText],
    );
}

export function useHasMatches(matchesCount: number): boolean {
    return useMemo(() => matchesCount > 0, [matchesCount]);
}

export function useMatchesSectionStats(totalMatches: number, loadingState: boolean) {
    return useMemo(
        () => ({
            hasMatches: totalMatches > 0,
            isLoading: loadingState,
            isEmpty: !loadingState && totalMatches === 0,
            matchesCount: totalMatches,
        }),
        [totalMatches, loadingState],
    );
}
