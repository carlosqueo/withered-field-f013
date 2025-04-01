'use client';

import { BarChart } from '@molecules/BarChart';
import { PageLayout } from '@templates/PageLayout';
import { useMetricsData } from '@/hooks/useMetricsData';
import { energyData } from '@/mocks/metricsData';
import { MetricsData } from '@/types/metrics';
import { ChartValue, SummaryItem } from '@/services/commonTypes';

const PAGE_TITLE = 'Desempeño energético';
const CHART_TITLE = 'Consumo de energía en sitio';

export default function EnergyPage() {
    const metricsData = useMetricsData<MetricsData>({
        endpoint: 'energy',
        mockData: energyData
    });

    const transformChartData = (values: { timestamp: string; value: number }[]): ChartValue[] => {
        return values.map((item, index) => ({
            key: item.timestamp,
            value: item.value
        }));
    };

    const transformSummaryData = (summary: { label: string; value: string | number }[]): SummaryItem[] => {
        return summary.map(item => ({
            type: 'metric',
            label: item.label,
            value: String(item.value)
        }));
    };

    const chart = metricsData.data?.charts?.[0] ?? {
        values: [],
        unit: ''
    };

    return (
        <PageLayout
            title={PAGE_TITLE}
        >
            <BarChart
                isLoading={metricsData.isLoading}
                title={CHART_TITLE}
                legendTitle={CHART_TITLE}
                chartData={transformChartData(chart.values)}
                unitLabel={chart.unit}
                legendData={metricsData.data?.summary ? transformSummaryData(metricsData.data.summary) : []}
            />
        </PageLayout>
    );
}
