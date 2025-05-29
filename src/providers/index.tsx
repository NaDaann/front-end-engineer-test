'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { SportsProvider } from './sports-provider';
import { OnboardingProvider } from '@/features/onboarding/providers/onboarding-provider';
import { ErrorBoundary } from '@/components/common/error-boundary';
import { ToastProvider } from '@/components/ui/toast';

interface ProvidersProps {
    children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    return (
        <ErrorBoundary>
            <ToastProvider>
                <SessionProvider>
                    <SportsProvider>
                        <OnboardingProvider>{children}</OnboardingProvider>
                    </SportsProvider>
                </SessionProvider>
            </ToastProvider>
        </ErrorBoundary>
    );
}
