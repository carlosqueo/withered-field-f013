import { authService } from '@/services/AuthService';
import { NextAuthOptions, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

// Extend the built-in session types
declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            email: string;
            name: string;
        } & {
            name?: string | null;
            email?: string | null;
            image?: string | null;
        }
    }

    interface User {
        id: string;
        email: string;
        name: string;
        access_token: string;
        refresh_token: string;
        tokens: {
            access_token: string;
            refresh_token: string;
            token_type: string;
        };
    }
}

// Extend JWT to include custom properties
declare module 'next-auth/jwt' {
    interface JWT {
        id: string;
        email: string;
        access_token: string;
        refresh_token: string;
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password)
                    throw new Error('Invalid credentials');

                const { access_token, refresh_token } = await authService.login(credentials);
                const { id, email } = await authService.getUser();
                if (access_token && refresh_token)
                    return {
                        id,
                        email,
                        name: credentials.username,
                        access_token,
                        refresh_token,
                        tokens: {
                            access_token,
                            refresh_token,
                            token_type: 'Bearer',
                        },
                    };
                return null;
            }
        })
    ],
    pages: {
        signIn: '/login',
        error: '/login',
    },
    callbacks: {
        async jwt({ token, user }): Promise<JWT> {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.access_token = user.access_token;
                token.refresh_token = user.refresh_token;
            }
            return token;
        },
        async session({ session, token }): Promise<Session> {
            if (session?.user && token?.id && token?.email) {
                session.user.id = token.id;
                session.user.email = token.email;
                session.tokens = {
                    access_token: token.access_token,
                    refresh_token: token.refresh_token,
                    token_type: 'Bearer',
                };
            }

            return session;
        },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith('/')) return `${baseUrl}${url}`;
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url;
            // Default to the dashboard after sign in
            return `${baseUrl}/dashboard`;
        }
    },
    session: {
        strategy: 'jwt'
    },
    secret: process.env.AUTH_SECRET ?? 'default-secret',
};