import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import type { NextAuthConfig } from 'next-auth';

export const config = {
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/home');
            const isOnOdds = nextUrl.pathname.startsWith('/odds');
            const isProtectedRoute = isOnDashboard || isOnOdds;

            if (isProtectedRoute) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/home', nextUrl));
            }
            return true;
        },
        session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            return session;
        },
        jwt({ token, user }) {
            if (user) {
                token.sub = user.id;
            }
            return token;
        },
    },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
