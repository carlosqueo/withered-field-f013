import { AirQualityData, MetricsData } from '@/types/metrics';

const getDayKey = (index: number) => {
    const days = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
    return days[index % 7];
};

export const airData: AirQualityData = {
    co: {
        values: [
            { timestamp: '2024-03-27T00:00:00Z', value: 0.02 },
            { timestamp: '2024-03-27T02:00:00Z', value: 0.03 },
            { timestamp: '2024-03-27T04:00:00Z', value: 0.04 },
            { timestamp: '2024-03-27T06:00:00Z', value: 0.05 },
            { timestamp: '2024-03-27T08:00:00Z', value: 0.03 },
            { timestamp: '2024-03-27T10:00:00Z', value: 0.02 },
            { timestamp: '2024-03-27T12:00:00Z', value: 0.02 },
            { timestamp: '2024-03-27T14:00:00Z', value: 0.03 },
            { timestamp: '2024-03-27T16:00:00Z', value: 0.04 },
            { timestamp: '2024-03-27T18:00:00Z', value: 0.03 },
            { timestamp: '2024-03-27T20:00:00Z', value: 0.02 },
            { timestamp: '2024-03-27T22:00:00Z', value: 0.01 }
        ],
        unit: 'ppm'
    },
    co2: {
        values: [
            { timestamp: '2024-03-27T00:00:00Z', value: 500 },
            { timestamp: '2024-03-27T02:00:00Z', value: 800 },
            { timestamp: '2024-03-27T04:00:00Z', value: 1000 },
            { timestamp: '2024-03-27T06:00:00Z', value: 2200 },
            { timestamp: '2024-03-27T08:00:00Z', value: 800 },
            { timestamp: '2024-03-27T10:00:00Z', value: 700 },
            { timestamp: '2024-03-27T12:00:00Z', value: 800 },
            { timestamp: '2024-03-27T14:00:00Z', value: 900 },
            { timestamp: '2024-03-27T16:00:00Z', value: 1000 },
            { timestamp: '2024-03-27T18:00:00Z', value: 1500 },
            { timestamp: '2024-03-27T20:00:00Z', value: 800 },
            { timestamp: '2024-03-27T22:00:00Z', value: 500 }
        ],
        unit: 'ppm'
    },
    tvoc: {
        values: [
            { timestamp: '2024-03-27T00:00:00Z', value: 100 },
            { timestamp: '2024-03-27T02:00:00Z', value: 500 },
            { timestamp: '2024-03-27T04:00:00Z', value: 1000 },
            { timestamp: '2024-03-27T06:00:00Z', value: 2000 },
            { timestamp: '2024-03-27T08:00:00Z', value: 3000 },
            { timestamp: '2024-03-27T10:00:00Z', value: 6500 },
            { timestamp: '2024-03-27T12:00:00Z', value: 4000 },
            { timestamp: '2024-03-27T14:00:00Z', value: 2000 },
            { timestamp: '2024-03-27T16:00:00Z', value: 1500 },
            { timestamp: '2024-03-27T18:00:00Z', value: 1000 },
            { timestamp: '2024-03-27T20:00:00Z', value: 500 },
            { timestamp: '2024-03-27T22:00:00Z', value: 100 }
        ],
        unit: 'ppb'
    },
    pm1: {
        values: [
            { timestamp: '2024-03-27T00:00:00Z', value: 5 },
            { timestamp: '2024-03-27T02:00:00Z', value: 5.2 },
            { timestamp: '2024-03-27T04:00:00Z', value: 5.4 },
            { timestamp: '2024-03-27T06:00:00Z', value: 5.6 },
            { timestamp: '2024-03-27T08:00:00Z', value: 5.3 },
            { timestamp: '2024-03-27T10:00:00Z', value: 5.1 },
            { timestamp: '2024-03-27T12:00:00Z', value: 5.2 },
            { timestamp: '2024-03-27T14:00:00Z', value: 5.4 },
            { timestamp: '2024-03-27T16:00:00Z', value: 5.5 },
            { timestamp: '2024-03-27T18:00:00Z', value: 5.3 },
            { timestamp: '2024-03-27T20:00:00Z', value: 5.2 },
            { timestamp: '2024-03-27T22:00:00Z', value: 5.1 }
        ],
        unit: 'μg/m³'
    },
    pm25: {
        values: [
            { timestamp: '2024-03-27T00:00:00Z', value: 11 },
            { timestamp: '2024-03-27T02:00:00Z', value: 11.2 },
            { timestamp: '2024-03-27T04:00:00Z', value: 11.4 },
            { timestamp: '2024-03-27T06:00:00Z', value: 11.6 },
            { timestamp: '2024-03-27T08:00:00Z', value: 11.3 },
            { timestamp: '2024-03-27T10:00:00Z', value: 11.1 },
            { timestamp: '2024-03-27T12:00:00Z', value: 11.2 },
            { timestamp: '2024-03-27T14:00:00Z', value: 11.4 },
            { timestamp: '2024-03-27T16:00:00Z', value: 11.5 },
            { timestamp: '2024-03-27T18:00:00Z', value: 11.3 },
            { timestamp: '2024-03-27T20:00:00Z', value: 11.2 },
            { timestamp: '2024-03-27T22:00:00Z', value: 11.1 }
        ],
        unit: 'μg/m³'
    },
    summary: {
        currentAqi: 50,
        status: 'Buena',
        tvoc: {
            value: 175,
            unit: 'ppb',
            status: 'Bueno'
        },
        pm1: {
            value: 5.33,
            unit: 'μg/m³',
            status: 'Excelente'
        },
        pm25: {
            value: 11.3,
            unit: 'μg/m³',
            status: 'Excelente'
        }
    }
};

export const energyData: MetricsData = {
    charts: [
        {
            values: [120, 145, 132, 148, 138, 142, 150].map((value, index) => ({
                timestamp: getDayKey(index),
                value
            })),
            unit: 'kWh'
        }
    ],
    summary: [
        { label: 'Promedio', value: '139.3' },
        { label: 'Máximo', value: '150' },
        { label: 'Mínimo', value: '120' }
    ]
};

export const experienceData: MetricsData = {
    charts: [
        {
            values: [85, 88, 92, 87, 90, 89, 91].map((value, index) => ({
                timestamp: getDayKey(index),
                value
            })),
            unit: '%'
        }
    ],
    summary: [
        { label: 'Promedio', value: '88.9' },
        { label: 'Máximo', value: '92' },
        { label: 'Mínimo', value: '85' }
    ]
};
