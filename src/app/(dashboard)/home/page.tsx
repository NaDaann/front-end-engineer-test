'use client';

import { motion } from 'framer-motion';
import { SportsList } from '@/features/sports/components/sports-list';
import { OnboardingModal } from '@/features/onboarding/components/onboarding-modal';
import { LoadingState } from '@/components/common/loading';
import { WelcomeSection, MatchesSection, useHomePage } from '@/features/home';

export default function HomePage() {
    const {
        session,
        searchTerm,
        setSearchTerm,
        selectedSport,
        setSelectedSport,
        sports,
        matches,
        sportsLoading,
        matchesLoading,
        favoriteCategories,
        isOnboardingOpen,
        completeOnboarding,
        closeOnboarding,
        reopenOnboarding,
        containerVariants,
        itemVariants,
    } = useHomePage();

    return (
        <>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
            >
                <WelcomeSection
                    userName={session?.user?.name || undefined}
                    onTutorialClick={reopenOnboarding}
                    itemVariants={itemVariants}
                />

                <motion.div variants={itemVariants}>
                    {sportsLoading ? (
                        <LoadingState type="sports" count={6} />
                    ) : (
                        <SportsList sports={sports} favoriteCategories={favoriteCategories} />
                    )}
                </motion.div>

                <MatchesSection
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    selectedSport={selectedSport}
                    onSportChange={setSelectedSport}
                    sports={sports}
                    matches={matches}
                    matchesLoading={matchesLoading}
                    favoriteCategories={favoriteCategories}
                    itemVariants={itemVariants}
                    containerVariants={containerVariants}
                />
            </motion.div>

            <OnboardingModal
                isOpen={isOnboardingOpen}
                onClose={closeOnboarding}
                onComplete={completeOnboarding}
            />
        </>
    );
}
