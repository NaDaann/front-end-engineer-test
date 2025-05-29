import type { OddsData } from '@/hooks/use-odds';
import type { LucideIcon } from 'lucide-react';

export interface OddsStatsProps {
    data: OddsData | null;
}

export interface StatCardData {
    title: string;
    value: string;
    subtitle: string;
    icon: LucideIcon;
    gradient: string;
    bgGradient: string;
    darkBgGradient: string;
}

export interface OddsStatsContainerProps {
    children: React.ReactNode;
    className?: string;
}

export interface OddsStatsGridProps {
    statCards: StatCardData[];
}

export interface OddsStatsCardProps {
    card: StatCardData;
}

export interface OddsStatsCardHeaderProps {
    title: string;
    icon: LucideIcon;
    gradient: string;
}

export interface OddsStatsCardContentProps {
    value: string;
    subtitle: string;
    gradient: string;
}

export interface OddsStatsCardBackgroundProps {
    bgGradient: string;
    darkBgGradient: string;
    gradient: string;
}

export interface OddsStatsLoadingProps {
    message?: string;
}
