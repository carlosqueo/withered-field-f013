'use client';

import { PageLayout } from '@/UI/templates/PageLayout';
import { TitleWithFilter } from '@/UI/molecules/TitleWithFilter';
import { LineChart } from '@/UI/molecules/LineChart';
import FilterProvider from '@/providers/FilterProvider';
import { SidePage } from './SidePage';
import { useQuery } from '@tanstack/react-query';
import { airService } from '@/services/AirService';

const PAGE_TITLE = 'Estado del aire';

// Thresholds for different metrics
const THRESHOLDS = {
    co2: {
        warning: 1000, // 33% of max observed value
        danger: 2000,  // 66% of max observed value
    },
    tvoc: {
        warning: 2000,
        danger: 4000,
    }
};

export default function AirQualityPage() {
    const { data, isLoading } = useQuery({
        queryKey: ['coco2'],
        queryFn: airService.getCOCO2
    });

    const transformData = (values: number[], timestamps: string[]) => {
        return values.map((value, index) => ({
            timestamp: timestamps[index],
            value
        }));
    };

    return (
        <FilterProvider filters={['zones', 'dates']}>
            <PageLayout
                titleComponent={TitleWithFilter}
                title={PAGE_TITLE}
                sidePage={<SidePage />}
                className='flex flex-col gap-10'
            >
                <LineChart
                    title="Dióxido y monóxido de carbono"
                    isLoading={isLoading}
                    data={[
                        {
                            name: 'CO',
                            data: data ? transformData(data.co.values, data.co.timestamps) : [],
                            color: '#60A5FA'
                        },
                        {
                            name: 'CO2',
                            data: data ? transformData(data.co2.values, data.co2.timestamps) : [],
                            color: '#84CC16'
                        }
                    ]}
                    yAxisLabel="ppm"
                    threshold={THRESHOLDS.co2}
                    summary={{
                        average: {
                            co: '0.03 ppm',
                            co2: '761 ppm'
                        },
                        max: {
                            co: '7.41 ppm',
                            co2: '2475 ppm'
                        },
                        min: {
                            co: '0 ppm',
                            co2: '432 ppm'
                        }
                    }}
                />
                <LineChart
                    title="Compuestos Orgánicos Volátiles Totales"
                    isLoading={isLoading}
                    data={[
                        {
                            name: 'TVOC',
                            data: data ? transformData(data.tvoc.values, data.tvoc.timestamps) : [],
                            color: '#84CC16'
                        }
                    ]}
                    yAxisLabel="ppb"
                    threshold={THRESHOLDS.tvoc}
                    summary={{
                        average: { tvoc: '3000 ppb' },
                        max: { tvoc: '7174 ppb' },
                        min: { tvoc: '0 ppb' }
                    }}
                />
            </PageLayout>
        </FilterProvider>
    );
}
