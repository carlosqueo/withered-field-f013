import { AxiosError } from 'axios';
import { api } from './axios';
import { signOut } from 'next-auth/react';

export interface LoginCredentials {
  username: string;
  password: string;
}
export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export interface User {
    id: string;
    email: string;
}

export const authService = {
    async login(credentials: LoginCredentials): Promise<AuthResponse> {
        try {
            const { data } = await api.post<AuthResponse>('/auth/login', credentials);
            // Store the token for future requests
            if (data.access_token) {
                if (typeof window !== 'undefined')
                    localStorage.setItem('auth-token', data.access_token);
                api.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;
            }
            return data;
        } catch (error: unknown) {
            console.error('Login failed:', error instanceof AxiosError ? error.response?.data : error);
            throw error;
        }
    },
    async getUser(): Promise<User> {
        try {
            const { data } = await api.get<User>('/auth/me');
            return data;
        } catch (error) {
            console.error('Failed to get user:', error);
            throw error;
        }
    },
    async logout() {
        signOut();
    }
};