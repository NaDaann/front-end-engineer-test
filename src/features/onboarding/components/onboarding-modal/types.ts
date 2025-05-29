export interface OnboardingStep {
    id: number;
    title: string;
    description: string;
    content: React.ReactNode;
    action?: {
        label: string;
        highlight?: boolean;
    };
}

export interface OnboardingModalProps {
    isOpen: boolean;
    onClose: () => void;
    onComplete: () => void;
}

export interface OnboardingHeaderProps {
    currentStep: number;
    totalSteps: number;
    onClose: () => void;
}

export interface OnboardingContentProps {
    step: OnboardingStep;
}

export interface OnboardingNavigationProps {
    currentStep: number;
    totalSteps: number;
    step: OnboardingStep;
    onNext: () => void;
    onPrevious: () => void;
    onComplete: () => void;
}

export interface OnboardingProgressProps {
    currentStep: number;
    totalSteps: number;
}

export interface OnboardingOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export interface OnboardingContainerProps {
    children: React.ReactNode;
}
