import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatOdds(odds: number): string {
    return odds.toFixed(2);
}

export function formatDate(date: Date | undefined): string {
    if (!date) return 'Invalid Date';
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    try {
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }).format(date);
    } catch {
        return date.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    }
}

export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(amount);
}

export function debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number,
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

export function generateSlug(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

export function getUserFirstName(name: string): string {
    if (!name) return '';
    const firstSpaceIndex = name.indexOf(' ');
    if (firstSpaceIndex === -1) return name;
    return name.substring(0, firstSpaceIndex);
}

export function prefersDarkMode(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export * from './hot-odds-calculator';

export * from './related-odds-analyzer';
