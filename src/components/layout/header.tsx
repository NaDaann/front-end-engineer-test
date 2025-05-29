'use client';

import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { LogOut, Menu, X, User, Home, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Logo from '../../../public/Daniel IGaming.png';

const navigation = [
    { name: 'Home', href: '/home', icon: Home },
    { name: 'Odds', href: '/odds', icon: TrendingUp },
];

export function Header() {
    const { data: session } = useSession();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const handleSignOut = () => {
        signOut({ callbackUrl: '/login' });
    };

    return (
        <header className="bg-background shadow-sm border-b border-border transition-theme">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/home" className="flex items-center space-x-2">
                            <Image src={Logo} alt="Logo Daniel IGaming" width={60} height={60} />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-4">
                        {navigation.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        'flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                                        pathname === item.href
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-accent',
                                    )}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User Menu */}
                    <div className="flex items-center space-x-4">
                        {session?.user && (
                            <div className="hidden sm:flex items-center space-x-2">
                                <User className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm text-foreground">{session.user.name}</span>
                            </div>
                        )}

                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleSignOut}
                            className="flex items-center space-x-2 hover:bg-red-600 hover:text-white transition-colors"
                            title="Sair"
                            id="sign-out-button"
                        >
                            <LogOut className="w-4 h-4" />
                            <span className="hidden sm:inline">Sair</span>
                        </Button>

                        {/* Mobile menu button */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-border pt-4 pb-4">
                        <nav className="space-y-2">
                            {navigation.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            'flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-theme',
                                            pathname === item.href
                                                ? 'bg-primary/10 text-primary'
                                                : 'text-muted-foreground hover:text-foreground hover:bg-accent',
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span>{item.name}</span>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
