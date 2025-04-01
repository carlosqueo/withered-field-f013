import NextAuth, { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

export interface AuthTokens {
    access_token: string;
    refresh_token: string;
    token_type: string;
}

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            email: string;
            name: string;
        } & DefaultSession['user'];
        tokens: AuthTokens;
    }

    interface User {
        id: string;
        email: string;
        name: string;
        tokens: AuthTokens;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        id: string;
        email: string;
        name: string;
        tokens: AuthTokens;
    }
}

// Add type for credentials
declare module 'next-auth/providers/credentials' {
    interface CredentialsConfig {
        authorize(credentials: {
            email: string;
            password: string;
        }): Promise<User | null>;
    }
}