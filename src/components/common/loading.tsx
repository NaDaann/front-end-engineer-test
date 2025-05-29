'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
    };

    return <Loader2 className={`animate-spin ${sizeClasses[size]} ${className}`} />;
}

interface LoadingCardProps {
    title?: string;
    description?: string;
    fullScreen?: boolean;
}

export function LoadingCard({
    title = 'Carregando...',
    description = 'Aguarde enquanto buscamos os dados',
    fullScreen = false,
}: LoadingCardProps) {
    const containerClasses = fullScreen
        ? 'min-h-screen flex items-center justify-center p-4'
        : 'flex items-center justify-center p-8';

    return (
        <div className={containerClasses}>
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-center">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        className="flex justify-center"
                    >
                        <LoadingSpinner size="lg" className="text-green-500" />
                    </motion.div>
                    <p className="text-gray-600 text-sm">{description}</p>
                </CardContent>
            </Card>
        </div>
    );
}

interface SkeletonProps {
    className?: string;
    variant?: 'text' | 'rectangular' | 'circular';
}

export function Skeleton({ className = '', variant = 'rectangular' }: SkeletonProps) {
    const baseClasses = 'animate-pulse bg-gray-200';

    const variantClasses = {
        text: 'h-4 rounded',
        rectangular: 'rounded-md',
        circular: 'rounded-full',
    };

    return <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} />;
}

// Skeleton components for specific UI elements
export function SportCardSkeleton() {
    return (
        <Card>
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <Skeleton variant="circular" className="w-8 h-8" />
                        <div className="space-y-2">
                            <Skeleton className="h-5 w-24" />
                            <Skeleton className="h-4 w-16" />
                        </div>
                    </div>
                    <Skeleton variant="circular" className="w-6 h-6" />
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton variant="circular" className="w-4 h-4" />
                </div>
            </CardContent>
        </Card>
    );
}

export function MatchCardSkeleton() {
    return (
        <Card>
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-6 w-20" />
                </div>
                <Skeleton className="h-4 w-32 mt-2" />
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="p-3 border rounded-lg space-y-2">
                                <Skeleton className="h-3 w-16" />
                                <Skeleton className="h-6 w-12" />
                                <Skeleton className="h-3 w-20" />
                            </div>
                        ))}
                    </div>
                    <Skeleton className="h-9 w-full" />
                </div>
            </CardContent>
        </Card>
    );
}

interface LoadingStateProps {
    type: 'sports' | 'matches' | 'page';
    count?: number;
}

export function LoadingState({ type, count = 3 }: LoadingStateProps) {
    if (type === 'page') {
        return <LoadingCard fullScreen />;
    }

    if (type === 'sports') {
        return (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: count }).map((_, i) => (
                    <SportCardSkeleton key={i} />
                ))}
            </div>
        );
    }

    if (type === 'matches') {
        return (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: count }).map((_, i) => (
                    <MatchCardSkeleton key={i} />
                ))}
            </div>
        );
    }

    return null;
}
