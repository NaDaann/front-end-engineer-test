import { Sport } from '@/types';

export interface UseSportsOrderOptions {
    storageKey?: string;
    enabled?: boolean;
}

export interface UseSportsOrderReturn {
    sports: Sport[];
    reorderSports: (newSports: Sport[]) => void;
    resetOrder: () => void;
    hasCustomOrder: boolean;
}

export interface SportsOrderData {
    storedOrder: string[];
    setStoredOrder: (order: string[]) => void;
}
