import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { getSession, signOut } from 'next-auth/react';
import { AuthTokens } from '@/types/next-auth';

// Extend AxiosRequestConfig to include retry flag
interface RequestConfig extends InternalAxiosRequestConfig {
    _retry?: boolean;
}

// Create axios instance with default config
export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
});

// Add a request interceptor to add the auth token
api.interceptors.request.use(
    async (config) => {
        // Get the session from NextAuth
        const session = await getSession();
        const tokens = session?.tokens;

        // If access token exists, add it to the headers
        if (tokens?.access_token)
            config.headers.Authorization = `${tokens.token_type} ${tokens.access_token}`;

        return config;
    },
    (error) => Promise.reject(error)
);

// Add a response interceptor for handling errors and token refresh
api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as RequestConfig;

        // If error is 401 and we haven't retried yet
        if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // Get current session
                const session = await getSession();
                const tokens = session?.tokens;

                if (!tokens?.refresh_token) {
                    await signOut({ redirect: true, callbackUrl: '/login' });
                    return Promise.reject(error);
                }
                // Try to refresh the token
                const response = await api.post<AuthTokens>('/auth/refresh', {
                    refresh_token: tokens.refresh_token
                });

                const newTokens = response.data;

                // Update the failed request with new token and retry
                if (originalRequest.headers)
                    originalRequest.headers.Authorization = `${newTokens.token_type} ${newTokens.access_token}`;

                return api(originalRequest);
            } catch (refreshError) {
                // If refresh fails, sign out
                await signOut({ redirect: true, callbackUrl: '/login' });
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);