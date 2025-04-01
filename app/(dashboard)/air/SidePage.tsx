import { useMetricsData } from '@/hooks/useMetricsData';
import { airData } from '@/mocks/metricsData';
import { AirQualityData } from '@/types/metrics';
import { MetricCard } from '@/UI/molecules/MetricCard';
import React from 'react';

export const SidePage = () => {
    const { data } = useMetricsData<AirQualityData>({
        endpoint: 'air',
        mockData: airData
    });
    return (
        <div className="col-span-4 flex flex-col gap-10">
            <MetricCard
                title="Calidad del aire actual"
                value={data?.summary?.currentAqi ?? 50}
                status={data?.summary?.status ?? 'Buena'}
                variant="success"
            />
            <MetricCard
                title="Compuestos orgánicos volátiles totales (TVOC)"
                value={data?.summary?.tvoc?.value ?? 175}
                unit={data?.summary?.tvoc?.unit ?? 'ppb'}
                status={data?.summary?.tvoc?.status ?? 'Bueno'}
                variant="success"
            />
            <MetricCard
                title="Material particulado 1.0"
                value={data?.summary?.pm1?.value ?? 5.33}
                unit={data?.summary?.pm1?.unit ?? 'μg/m³'}
                status={data?.summary?.pm1?.status ?? 'Excelente'}
                variant="info"
            />
            <MetricCard
                title="Material particulado 2.5"
                value={data?.summary?.pm25?.value ?? 11.3}
                unit={data?.summary?.pm25?.unit ?? 'μg/m³'}
                status={data?.summary?.pm25?.status ?? 'Excelente'}
                variant="info"
            />
        </div>
    );
};

