import { Variants } from 'framer-motion';
import { Session } from 'next-auth';

export interface AnimationVariants {
    containerVariants: Variants;
    itemVariants: Variants;
}

export interface HomePageSession extends Session {
    user?: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
    };
}
