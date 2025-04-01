import { useQuery } from '@tanstack/react-query';
import { MetricsData } from '@/types/metrics';
import { api } from '@/services/axios';

interface UseMetricsDataProps<T> {
    endpoint: string;
    mockData?: T;
}

export function useMetricsData<T = MetricsData>({ endpoint, mockData }: UseMetricsDataProps<T>) {
    const { data, isLoading } = useQuery<T>({
        queryKey: ['metrics', endpoint],
        queryFn: async () => {
            if (mockData) return mockData;
            const response = await api.get<T>(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`);
            return response.data;
        }
    });

    return { data, isLoading };
}
