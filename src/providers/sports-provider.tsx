'use client';

import React, { createContext, useContext, useReducer, useCallback } from 'react';
import { Sport, Category } from '@/types';

interface SportsState {
    sports: Sport[];
    categories: Category[];
    favoriteCategories: string[];
    loading: boolean;
    error: string | null;
}

type SportsAction =
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'SET_ERROR'; payload: string | null }
    | { type: 'SET_SPORTS'; payload: Sport[] }
    | { type: 'SET_CATEGORIES'; payload: Category[] }
    | { type: 'SET_FAVORITE_CATEGORIES'; payload: string[] }
    | { type: 'ADD_FAVORITE_CATEGORY'; payload: string }
    | { type: 'REMOVE_FAVORITE_CATEGORY'; payload: string }
    | { type: 'REORDER_CATEGORIES'; payload: Category[] };

const initialState: SportsState = {
    sports: [],
    categories: [],
    favoriteCategories: [],
    loading: false,
    error: null,
};

const sportsReducer = (state: SportsState, action: SportsAction): SportsState => {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        case 'SET_SPORTS':
            return { ...state, sports: action.payload };
        case 'SET_CATEGORIES':
            return { ...state, categories: action.payload };
        case 'SET_FAVORITE_CATEGORIES':
            return { ...state, favoriteCategories: action.payload };
        case 'ADD_FAVORITE_CATEGORY':
            return {
                ...state,
                favoriteCategories: [...state.favoriteCategories, action.payload],
            };
        case 'REMOVE_FAVORITE_CATEGORY':
            return {
                ...state,
                favoriteCategories: state.favoriteCategories.filter((id) => id !== action.payload),
            };
        case 'REORDER_CATEGORIES':
            return { ...state, categories: action.payload };
        default:
            return state;
    }
};

interface SportsContextType extends SportsState {
    setSports: (sports: Sport[]) => void;
    setCategories: (categories: Category[]) => void;
    addFavoriteCategory: (categoryId: string) => void;
    removeFavoriteCategory: (categoryId: string) => void;
    reorderCategories: (categories: Category[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
}

const SportsContext = createContext<SportsContextType | undefined>(undefined);

export function SportsProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(sportsReducer, initialState);

    const setSports = useCallback((sports: Sport[]) => {
        dispatch({ type: 'SET_SPORTS', payload: sports });
    }, []);

    const setCategories = useCallback((categories: Category[]) => {
        dispatch({ type: 'SET_CATEGORIES', payload: categories });
    }, []);

    const addFavoriteCategory = useCallback((categoryId: string) => {
        dispatch({ type: 'ADD_FAVORITE_CATEGORY', payload: categoryId });
    }, []);

    const removeFavoriteCategory = useCallback((categoryId: string) => {
        dispatch({ type: 'REMOVE_FAVORITE_CATEGORY', payload: categoryId });
    }, []);

    const reorderCategories = useCallback((categories: Category[]) => {
        dispatch({ type: 'REORDER_CATEGORIES', payload: categories });
    }, []);

    const setLoading = useCallback((loading: boolean) => {
        dispatch({ type: 'SET_LOADING', payload: loading });
    }, []);

    const setError = useCallback((error: string | null) => {
        dispatch({ type: 'SET_ERROR', payload: error });
    }, []);

    const value: SportsContextType = {
        ...state,
        setSports,
        setCategories,
        addFavoriteCategory,
        removeFavoriteCategory,
        reorderCategories,
        setLoading,
        setError,
    };

    return <SportsContext.Provider value={value}>{children}</SportsContext.Provider>;
}

export function useSports() {
    const context = useContext(SportsContext);
    if (context === undefined) {
        throw new Error('useSports must be used within a SportsProvider');
    }
    return context;
}
