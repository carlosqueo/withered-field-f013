'use client';

import { BarChart } from '@molecules/BarChart';
import { PageLayout } from '@templates/PageLayout';
import { mockResponse } from './mockData';
import { useQuery } from '@tanstack/react-query';
const title = 'Desempeño de agua';

const fetchEnergyData = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockResponse.data;
};

export default function Home() {
    const { data, isLoading } = useQuery({ gcTime: 1000, queryKey: ['waterData'], queryFn: fetchEnergyData });
    const chart = data?.charts?.[0];
    return (
        <PageLayout
            title={title}
        // isLoading={isLoading}
        >
            <BarChart
                isLoading={isLoading}
                title="Consumo de agua"
                legendTitle="Consumo de agua"
                chartData={chart?.values || []}
                unitLabel={chart?.unit ?? ''}
                legendData={data?.summary ?? []}
            />
        </PageLayout>
    );
}
