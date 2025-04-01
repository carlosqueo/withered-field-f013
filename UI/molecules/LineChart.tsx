import { Card } from '@/UI/atoms/card';
import { PageTitle } from '@/UI/organisms/PageTitle';
import { Area, AreaChart, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';
import { Skeleton } from '@/UI/atoms/Skeleton';
import { cn } from '@/lib/utils';

interface DataPoint {
    name: string;
    data: Array<{ timestamp: string; value: number }>;
    color: string;
}

interface Summary {
    average: Record<string, string>;
    max: Record<string, string>;
    min: Record<string, string>;
}

interface Threshold {
    warning: number;
    danger: number;
}

interface LineChartProps {
    title: string;
    data: DataPoint[];
    yAxisLabel?: string;
    isLoading?: boolean;
    summary?: Summary;
    threshold?: Threshold;
}

interface ChartDataPoint {
    timestamp: string;
    [key: string]: string | number;
}

export function LineChart({ title, data, yAxisLabel, isLoading, summary, threshold }: LineChartProps) {
    if (isLoading)
        return (
            <Card className="w-full h-[400px]">
                <Skeleton className="w-full h-full" />
            </Card>
        );

    // Transform data for Recharts
    const chartData: ChartDataPoint[] = data[0]?.data?.map((point, index) => {
        const result: ChartDataPoint = {
            timestamp: new Date(point.timestamp).toLocaleTimeString('es-ES', {
                hour: '2-digit',
                minute: '2-digit'
            })
        };
        data.forEach(series => {
            result[series.name] = series.data[index]?.value || 0;
        });
        return result;
    }) || [];

    // Calculate Y axis domain based on data and thresholds
    const allValues = data.flatMap(series => series.data.map(point => point.value));
    const maxValue = Math.max(...allValues, threshold?.danger || 0);
    const minValue = Math.min(...allValues, 0);
    const yDomain = [minValue, maxValue * 1.1]; // Add 10% padding to top

    return (
        <div className="space-y-6">
            <PageTitle>{title}</PageTitle>
            <Card className="w-full px-11 py-14 space-y-6 bg-white">
                <div className="flex items-center">
                    <div className="flex-1 h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData} margin={{ right: 30 }}>
                                {threshold && (
                                    <>
                                        <ReferenceArea
                                            y1={0}
                                            y2={threshold.warning}
                                            fill="#22c55e"
                                            fillOpacity={0.1}
                                        />
                                        <ReferenceArea
                                            y1={threshold.warning}
                                            y2={threshold.danger}
                                            fill="#eab308"
                                            fillOpacity={0.1}
                                        />
                                        <ReferenceArea
                                            y1={threshold.danger}
                                            y2={yDomain[1]}
                                            fill="#ef4444"
                                            fillOpacity={0.1}
                                        />
                                    </>
                                )}
                                <XAxis
                                    dataKey="timestamp"
                                    tickLine={false}
                                    axisLine={false}
                                    fontSize={12}
                                />
                                <YAxis
                                    domain={yDomain}
                                    label={{
                                        value: yAxisLabel,
                                        angle: -90,
                                        position: 'insideLeft',
                                        style: { textAnchor: 'middle' }
                                    }}
                                    tickLine={false}
                                    axisLine={false}
                                    fontSize={12}
                                />
                                <Tooltip />

                                {data.map((series) => (
                                    <Area
                                        key={series.name}
                                        name={series.name}
                                        type="monotone"
                                        dataKey={series.name}
                                        stroke={series.color}
                                        fill={series.color}
                                        fillOpacity={0.1}
                                        strokeWidth={2}
                                    />
                                ))}
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    {summary && (
                        <div className="min-w-[200px] space-y-4 pl-6 border-l border-grayBlue-900">
                            {data.map((series) => (
                                <div key={series.name} className="relative flex items-center">
                                    <div className="absolute h-[18px] w-[18px] rounded-full border-[3px] border-[--]" style={{
                                        borderColor: series.color
                                    }}></div>
                                    <div className="text-lg font-semibold text-grayblue-1400 ml-6">
                                        {series.name.toUpperCase()}
                                    </div>
                                </div>
                            ))}
                            <div>
                                <h4 className="text-sm font-medium text-gray-500">Promedio:</h4>
                                {Object.entries(summary.average).map(([key, value]) => (
                                    <p key={key} className="mt-1 text-sm">
                                        {key.toUpperCase()}: {value}
                                    </p>
                                ))}
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-gray-500">Máximo:</h4>
                                {Object.entries(summary.max).map(([key, value]) => (
                                    <p key={key} className="mt-1 text-sm">
                                        {key.toUpperCase()}: {value}
                                    </p>
                                ))}
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-gray-500">Mínimo:</h4>
                                {Object.entries(summary.min).map(([key, value]) => (
                                    <p key={key} className="mt-1 text-sm">
                                        {key.toUpperCase()}: {value}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
}