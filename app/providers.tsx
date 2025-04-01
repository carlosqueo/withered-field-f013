'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from 'next-auth/react';
// import { Toaster } from '@ui/toaster';
import { useAtom } from 'jotai';
import { themeAtom } from '@store/theme';

export function Providers({ children }: { children: React.ReactNode }) {
    const [theme] = useAtom(themeAtom);
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000, // 1 minute
            },
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            <SessionProvider>
                <div className={`h-screen ${theme}`}>{children}</div>
                {/* <Toaster /> */}
            </SessionProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}