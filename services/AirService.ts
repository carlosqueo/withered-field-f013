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

export interface AirQualityData {
    time: string;
    co: number;
    co2: number;
    tvoc: number;
}

export interface AirQualityCurrent {
    airQuality: number;
    airQualityStatus: string;
    tvoc: number;
    tvocStatus: string;
    pm1: number;
    pm1Status: string;
    pm25: number;
    pm25Status: string;
}

export interface AirQualityStats {
    current: AirQualityCurrent;
    average: {
        co: number;
        co2: number;
        tvoc: number;
    };
    max: {
        co: number;
        co2: number;
        tvoc: number;
    };
    min: {
        co: number;
        co2: number;
        tvoc: number;
    };
}

export interface COCO2Data {
    co: {
        values: number[];
        timestamps: string[];
    };
    co2: {
        values: number[];
        timestamps: string[];
    };
    tvoc: {
        values: number[];
        timestamps: string[];
    };
}

export const airService = {
    async getCOCO2(): Promise<COCO2Data> {
        try {
            const { data } = await api.get<COCO2Data>('/air/charts/co-co2');
            return data;
        } catch (error: unknown) {
            console.error('Failed to get CO/CO2 data:', error instanceof AxiosError ? error.response?.data : error);
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
    async getAirQualityData(zone: string, date: Date): Promise<AirQualityData[]> {
        try {
            const { data } = await api.get<AirQualityData[]>(`/air/data/${zone}`, {
                params: { date: date.toISOString() }
            });
            return data;
        } catch (error) {
            console.error('Failed to get air quality data:', error);
            throw error;
        }
    },
    async getAirQualityStats(zone: string, date: Date): Promise<AirQualityStats> {
        try {
            const { data } = await api.get<AirQualityStats>(`/air/stats/${zone}`, {
                params: { date: date.toISOString() }
            });
            return data;
        } catch (error) {
            console.error('Failed to get air quality stats:', error);
            throw error;
        }
    },
    async logout() {
        signOut();
    }
};