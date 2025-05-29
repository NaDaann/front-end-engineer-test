'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    resetError = () => {
        this.setState({ hasError: false, error: undefined });
    };

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                const FallbackComponent = this.props.fallback;
                return <FallbackComponent error={this.state.error!} resetError={this.resetError} />;
            }

            return <DefaultErrorFallback error={this.state.error!} resetError={this.resetError} />;
        }

        return this.props.children;
    }
}

interface ErrorFallbackProps {
    error: Error;
    resetError: () => void;
}

function DefaultErrorFallback({ error, resetError }: ErrorFallbackProps) {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <div className="flex items-center space-x-2">
                        <AlertTriangle className="w-6 h-6 text-red-500" />
                        <CardTitle className="text-red-700">Ops! Algo deu errado</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-gray-600">
                        Ocorreu um erro inesperado. Nossa equipe foi notificada e está trabalhando
                        para resolver o problema.
                    </p>

                    {process.env.NODE_ENV === 'development' && (
                        <div className="p-3 bg-black-900 border border-red-500 rounded-md">
                            <p className="text-sm font-mono">{error.message}</p>
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-2">
                        <Button onClick={resetError} className="flex items-center space-x-2">
                            <RefreshCw className="w-4 h-4" />
                            <span>Tentar Novamente</span>
                        </Button>

                        <Link href="/home">
                            <Button
                                variant="outline"
                                className="w-full flex items-center space-x-2"
                            >
                                <Home className="w-4 h-4" />
                                <span>Voltar ao Início</span>
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
