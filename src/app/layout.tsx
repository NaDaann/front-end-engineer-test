import type { Metadata } from 'next';
import { Providers } from '@/providers';
import './globals.css';

export const metadata: Metadata = {
    title: 'Daniel Gaming - Plataforma de Apostas Esportivas',
    description:
        'Visualize apostas esportivas, organize categorias favoritas e explore as melhores odds.',
};

export const viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
    ],
    colorScheme: 'light dark',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className="h-full">
            <head>
                <meta name="color-scheme" content="light dark" />
            </head>
            <body className="antialiased h-full">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
