import { useMemo } from 'react';
import { getUserFirstName } from '@/lib/utils';
import { WelcomeSectionHeaderProps } from './types';
import { WELCOME_SECTION_DEFAULTS } from './config';

export function useWelcomeSectionHeader(
    userName?: string,
    customTitle?: string,
    customSubtitle?: string
): WelcomeSectionHeaderProps {
    return useMemo(() => ({
        userName,
        title: customTitle ?? WELCOME_SECTION_DEFAULTS.title,
        subtitle: customSubtitle ?? WELCOME_SECTION_DEFAULTS.subtitle,
    }), [userName, customTitle, customSubtitle]);
}

export function useUserDisplayName(userName?: string): string {
    return useMemo(() => {
        return userName ? getUserFirstName(userName) : '';
    }, [userName]);
}

export function useWelcomeMessage(userName?: string, greeting: string = 'Bem-vindo'): string {
    return useMemo(() => {
        const displayName = userName ? getUserFirstName(userName) : '';
        return displayName ? `${greeting}, ${displayName}! 👋` : `${greeting}! 👋`;
    }, [userName, greeting]);
}
