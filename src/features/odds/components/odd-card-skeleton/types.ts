// Types and interfaces for odd-card-skeleton components
export interface OddCardSkeletonProps {
    isHot?: boolean;
}

export interface OddCardSkeletonListProps {
    count?: number;
    className?: string;
    colsByScreenSize?: {
        sm?: number;
        md?: number;
        lg?: number;
    };
}

export interface OddCardSkeletonContainerProps {
    isHot?: boolean;
    children: React.ReactNode;
}

export interface OddCardSkeletonHeaderProps {
    isHot?: boolean;
}

export interface OddCardSkeletonOddsProps {
    isHot?: boolean;
}

export interface OddCardSkeletonMetaProps {
    isHot?: boolean;
}

export interface SkeletonVariant {
    container: string;
    pulse: string;
    primary: string;
    secondary: string;
    accent: string;
}
