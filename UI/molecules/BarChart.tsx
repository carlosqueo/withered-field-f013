'use client';

import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from '@atoms/Charts';
import { ChartTitle } from '@atoms/ChartTitle';
import { Div } from '@atoms/Div';
import { Chart, ChartValue, SummaryItem } from '@services/commonTypes';
import {
    Bar,
    CartesianGrid,
    XAxis,
    BarChart as BarChartComponent,
    YAxis,
} from 'recharts';
import { SkeletonChart } from '../skeletons/SkeletonChart';
import { Fragment } from 'react';

interface BarChartProps {
    key?: string;
    legendData: SummaryItem[];
    unitLabel: string;
    title?: string;
    legendTitle: string;
    chartData: ChartValue[];
    isLoading?: boolean;
}

export const BarChart = ({
    chartData,
    legendData,
    title = '',
    key = 'key',
    unitLabel = '',
    legendTitle = '',
    isLoading = true,
}: BarChartProps) => {
    const chartConfig = {
        value: {
            label: 'Monasdasdsasthly',
            color: 'var(--chart-1)',
        },
    } satisfies ChartConfig;
    return (
        <Div className="flex flex-col gap-6 h-[450px]">
            <ChartTitle>{title}</ChartTitle>
            <Div loadingComponent={SkeletonChart} loading={isLoading} as={Fragment}>
                <ChartContainer
                    config={chartConfig}
                    className="min-h-[200px] w-full flex bg-white px-11 py-14 rounded-2xl"
                >
                    <BarChartComponent accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey={key}
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <YAxis tickLine={false} axisLine={false} unit={unitLabel} />
                        <ChartTooltip
                            content={<ChartTooltipContent valueKey={unitLabel} />}
                        />
                        <ChartLegend
                            align="right"
                            layout="vertical"
                            verticalAlign="top"
                            content={
                                <ChartLegendContent
                                    legendData={legendData}
                                    legendTitle={legendTitle}
                                />
                            }
                        />
                        <Bar dataKey="value" fill="var(--overlay)" radius={4} />
                    </BarChartComponent>
                </ChartContainer>
            </Div>
        </Div>
    );
};
