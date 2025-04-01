import { useEffect, useState } from 'react';
import { airService, type AirQualityData, type AirQualityStats } from '@/services/AirService';
import { LineChart } from '@/UI/molecules/LineChart';
import { Card } from '@/UI/atoms/card';

interface AirQualityDashboardProps {
    zone: string;
    date: Date;
}

export const AirQualityDashboard = ({ zone, date }: AirQualityDashboardProps) => {
    const [data, setData] = useState<AirQualityData[]>([]);
    const [stats, setStats] = useState<AirQualityStats | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const [airData, airStats] = await Promise.all([
                airService.getAirQualityData(zone, date),
                airService.getAirQualityStats(zone, date)
            ]);
            setData(airData);
            setStats(airStats);
        };

        fetchData();
    }, [zone, date]);

    if (!stats) return null;

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-4 gap-4">
                <Card>
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-500">Calidad del aire actual</h3>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-green-600">{stats.current.airQuality}</span>
                            <span className="text-sm text-gray-500">{stats.current.airQualityStatus}</span>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-500">Compuestos orgánicos volátiles totales (TVOC)</h3>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-green-600">{stats.current.tvoc}</span>
                            <span className="text-sm text-gray-500">ppb</span>
                            <span className="text-sm text-gray-500">{stats.current.tvocStatus}</span>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-500">Material particulado 1.0</h3>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-green-600">{stats.current.pm1}</span>
                            <span className="text-sm text-gray-500">µg/m³</span>
                            <span className="text-sm text-gray-500">{stats.current.pm1Status}</span>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-500">Material particulado 2.5</h3>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-green-600">{stats.current.pm25}</span>
                            <span className="text-sm text-gray-500">µg/m³</span>
                            <span className="text-sm text-gray-500">{stats.current.pm25Status}</span>
                        </div>
                    </div>
                </Card>
            </div>

            <LineChart
                title="Dióxido y monóxido de carbono"
                data={[
                    {
                        name: 'CO',
                        data: data.map(d => ({
                            timestamp: d.time,
                            value: d.co
                        })),
                        color: '#3B82F6'
                    },
                    {
                        name: 'CO2',
                        data: data.map(d => ({
                            timestamp: d.time,
                            value: d.co2
                        })),
                        color: '#84CC16'
                    }
                ]}
                yAxisLabel="ppm"
                summary={{
                    average: {
                        co: stats.average.co.toString(),
                        co2: stats.average.co2.toString()
                    },
                    max: {
                        co: stats.max.co.toString(),
                        co2: stats.max.co2.toString()
                    },
                    min: {
                        co: stats.min.co.toString(),
                        co2: stats.min.co2.toString()
                    }
                }}
            />

            <LineChart
                title="Compuestos Orgánicos Volátiles Totales"
                data={[
                    {
                        name: 'TVOC',
                        data: data.map(d => ({
                            timestamp: d.time,
                            value: d.tvoc
                        })),
                        color: '#84CC16'
                    }
                ]}
                yAxisLabel="ppb"
                summary={{
                    average: {
                        tvoc: stats.average.tvoc.toString()
                    },
                    max: {
                        tvoc: stats.max.tvoc.toString()
                    },
                    min: {
                        tvoc: stats.min.tvoc.toString()
                    }
                }}
            />
        </div>
    );
};