import { Variants } from 'framer-motion';

export interface WelcomeSectionProps {
    userName?: string;
    onTutorialClick: () => void;
    itemVariants: Variants;
}

export interface WelcomeSectionContainerProps {
    children: React.ReactNode;
    variants?: Variants;
}

export interface WelcomeSectionHeaderProps {
    userName?: string;
    title?: string;
    subtitle?: string;
}

export interface WelcomeSectionContentProps {
    onTutorialClick: () => void;
    buttonText?: string;
    showTutorialButton?: boolean;
}
