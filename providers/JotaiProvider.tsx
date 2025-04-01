'use client';

import { Provider } from 'jotai';
import { store } from '@/store/store';
import { ReactNode } from 'react';

interface JotaiProviderProps {
    children: ReactNode;
}

export function JotaiProvider({ children }: JotaiProviderProps) {
    return <Provider store={store}>{children}</Provider>;
}