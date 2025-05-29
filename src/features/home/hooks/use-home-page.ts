'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useApi } from '@/hooks/use-api';
import { useSports } from '@/providers/sports-provider';
import { useOnboarding } from '@/features/onboarding/providers/onboarding-provider';
import { Sport, Match } from '@/types';
import { HomePageSession, AnimationVariants } from '../types';

interface UseHomePageReturn extends AnimationVariants {
    // Session
    session: HomePageSession | null;

    // States
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    selectedSport: string;
    setSelectedSport: (sport: string) => void;

    // Data
    sports: Sport[];
    matches: Match[];
    filteredMatches: Match[];

    // Loading states
    sportsLoading: boolean;
    matchesLoading: boolean;

    // Providers
    favoriteCategories: string[];
    isOnboardingOpen: boolean;
    completeOnboarding: () => void;
    closeOnboarding: () => void;
    reopenOnboarding: () => void;
}

export function useHomePage(): UseHomePageReturn {
    const { data: session } = useSession();
    const { favoriteCategories } = useSports();
    const { isOnboardingOpen, completeOnboarding, closeOnboarding, reopenOnboarding } =
        useOnboarding();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSport, setSelectedSport] = useState<string>('all');

    // Fetch sports data
    const { data: sportsData, loading: sportsLoading } = useApi<Sport[]>('/sports');

    // Fetch matches data
    const { data: matchesData, loading: matchesLoading } = useApi<Match[]>('/odds');

    const sports = sportsData || [];
    const matches = matchesData || [];

    // Filter matches based on selected sport and favorites
    const filteredMatches = matches.filter((match) => {
        if (selectedSport === 'favorites') {
            return favoriteCategories.includes(match.sportId);
        }
        if (selectedSport !== 'all') {
            return match.sportId === selectedSport;
        }
        return true;
    });

    // Filter by search term
    const searchFilteredMatches = filteredMatches.filter(
        (match) =>
            match.homeTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
            match.awayTeam.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return {
        session,
        searchTerm,
        setSearchTerm,
        selectedSport,
        setSelectedSport,
        sports,
        matches: searchFilteredMatches,
        filteredMatches: searchFilteredMatches,
        sportsLoading,
        matchesLoading,
        favoriteCategories,
        isOnboardingOpen,
        completeOnboarding,
        closeOnboarding,
        reopenOnboarding,
        containerVariants,
        itemVariants,
    };
}
