'use client';

import { useState, createContext, useContext, ReactNode } from 'react';
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
    id: string;
    title?: string;
    message: string;
    type: ToastType;
    duration?: number;
    action?: {
        label: string;
        onClick: () => void;
    };
}

interface ToastContextType {
    toasts: Toast[];
    addToast: (toast: Omit<Toast, 'id'>) => void;
    removeToast: (id: string) => void;
    success: (message: string, title?: string) => void;
    error: (message: string, title?: string) => void;
    warning: (message: string, title?: string) => void;
    info: (message: string, title?: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = (toast: Omit<Toast, 'id'>) => {
        const id = Math.random().toString(36).substr(2, 9);
        const newToast = { ...toast, id };

        setToasts((prev) => [...prev, newToast]);

        // Auto remove toast after duration
        if (toast.duration !== 0) {
            setTimeout(() => {
                removeToast(id);
            }, toast.duration || 5000);
        }
    };

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    const success = (message: string, title?: string) => {
        addToast({ type: 'success', message, title });
    };

    const error = (message: string, title?: string) => {
        addToast({ type: 'error', message, title, duration: 7000 });
    };

    const warning = (message: string, title?: string) => {
        addToast({ type: 'warning', message, title });
    };

    const info = (message: string, title?: string) => {
        addToast({ type: 'info', message, title });
    };

    return (
        <ToastContext.Provider
            value={{
                toasts,
                addToast,
                removeToast,
                success,
                error,
                warning,
                info,
            }}
        >
            {children}
            <ToastContainer toasts={toasts} onRemove={removeToast} />
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}

interface ToastContainerProps {
    toasts: Toast[];
    onRemove: (id: string) => void;
}

function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
    return (
        <div className="fixed bottom-4 right-4 z-50 space-y-2">
            <AnimatePresence>
                {toasts.map((toast) => (
                    <ToastItem key={toast.id} toast={toast} onRemove={() => onRemove(toast.id)} />
                ))}
            </AnimatePresence>
        </div>
    );
}

interface ToastItemProps {
    toast: Toast;
    onRemove: () => void;
}

function ToastItem({ toast, onRemove }: ToastItemProps) {
    const getIcon = () => {
        switch (toast.type) {
            case 'success':
                return <CheckCircle className="w-5 h-5" />;
            case 'error':
                return <AlertCircle className="w-5 h-5" />;
            case 'warning':
                return <AlertTriangle className="w-5 h-5" />;
            case 'info':
                return <Info className="w-5 h-5" />;
        }
    };

    const getColorClasses = () => {
        switch (toast.type) {
            case 'success':
                return 'bg-green-50 border-green-200 text-green-800';
            case 'error':
                return 'bg-red-50 border-red-200 text-red-800';
            case 'warning':
                return 'bg-yellow-50 border-yellow-200 text-yellow-800';
            case 'info':
                return 'bg-blue-50 border-blue-200 text-blue-800';
        }
    };

    const getIconColorClasses = () => {
        switch (toast.type) {
            case 'success':
                return 'text-green-500';
            case 'error':
                return 'text-red-500';
            case 'warning':
                return 'text-yellow-500';
            case 'info':
                return 'text-blue-500';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className={cn(
                'max-w-sm w-full bg-white border rounded-lg shadow-lg p-4',
                getColorClasses(),
            )}
        >
            <div className="flex items-start">
                <div className={cn('shrink-0', getIconColorClasses())}>{getIcon()}</div>

                <div className="ml-3 flex-1">
                    {toast.title && <p className="text-sm font-medium">{toast.title}</p>}
                    <p className={cn('text-sm', toast.title ? 'mt-1' : '')}>{toast.message}</p>

                    {toast.action && (
                        <div className="mt-3">
                            <button
                                onClick={toast.action.onClick}
                                className="text-sm font-medium underline hover:no-underline"
                            >
                                {toast.action.label}
                            </button>
                        </div>
                    )}
                </div>

                <button
                    onClick={onRemove}
                    className="ml-4 shrink-0 text-gray-400 hover:text-gray-600"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </motion.div>
    );
}
