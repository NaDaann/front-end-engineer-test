'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github } from 'lucide-react';

export default function LoginPage() {
    const handleGithubSignIn = () => {
        signIn('github', { callbackUrl: '/home' });
    };

    return (
        <div className="min-h-screen flex items-center justify-center  p-4">
            <Card className="w-full max-w-md bg-gradient-to-br from-green-700 to-green-1000">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                        Daniel Gaming
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                        Plataforma de Visualização de Apostas Esportivas
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="text-center">
                        <p className="text-sm text-gray-600 mb-4">
                            Faça login para acessar a plataforma
                        </p>
                    </div>

                    <Button
                        onClick={handleGithubSignIn}
                        className="w-full flex items-center justify-center gap-2 bg-black/10 hover:bg-black/50 text-white border border-gray-300"
                        size="lg"
                    >
                        <Github className="w-5 h-5" />
                        Entrar com GitHub
                    </Button>

                    <div className="text-center text-xs text-gray-500">
                        Ao fazer login, você concorda com nossos termos de uso
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
