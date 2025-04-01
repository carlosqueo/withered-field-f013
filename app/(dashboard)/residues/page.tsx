'use client';

import { BarChart } from '@molecules/BarChart';

const title = 'Desempeño de la calidad de aire';
// const chartDataDaily = [
//     { day: "Monday", value: 186 },
//     { day: "Tuesday", value: 305 },
//     { day: "Wednesday", value: 237 },
//     { day: "Thursday", value: 73 },
//     { day: "Friday", value: 209 },
//     { day: "Saturday", value: 214 },
//     { day: "Sunday", value: 189 },
// ]

const responseExample = {
    legend: {
        title: 'Consumo de agua',
        values: [
            {
                type: 'text',
                label: 'Consumo de agua:',
                value: '38000 gal/mes',
            },
            {
                type: 'text',
                label: 'Por metro cuadrado',
                value: '192 gal/m² al mes',
            },
            {
                type: 'text',
                label: 'Área de la copropiedad',
                value: '200 m2',
            },
        ],
    },
    charts: [
        {
            type: 'bar',
            label: 'Consumo',
            unit: 'kBTU',
            values: [
                { key: 'Ene', value: 186 },
                { key: 'Feb', value: 305 },
                { key: 'Mar', value: 237 },
                { key: 'Abr', value: 73 },
                { key: 'May', value: 209 },
                { key: 'Jun', value: 214 },
                { key: 'Jul', value: 189 },
                { key: 'Ago', value: 200 },
                { key: 'Sep', value: 250 },
                { key: 'Oct', value: 300 },
                { key: 'Nov', value: 150 },
                { key: 'Dec', value: 250 },
            ],
        },
    ],
};

// const chartDataAnnual = [
//     { year: "2019", value: 200 },
//     { year: "2020", value: 250 },
//     { year: "2021", value: 300 },
//     { year: "2022", value: 150 },
//     { year: "2023", value: 250 },
//     { year: "2024", value: 200 },
//     { year: "2025", value: 290 },
// ];

// const chartConfig = {
//     month: {
//         label: "Monthly",
//         color: "var(--chart-1)",
//     },
// } satisfies ChartConfig;

export default function Home() {
    const chartData = responseExample.charts?.[0];
    return (
        <div className="grid grid-cols-12 h-full">
            <div className="col-span-9 p-8 flex flex-col gap-10">
                <div className="text-2xl text-grayBlue-1400">{title}</div>
                <BarChart
                    legendTitle="Consumo de agua"
                    chartData={chartData.values}
                    unitLabel={chartData.unit}
                    legendData={responseExample.legend.values}
                />
            </div>
            <div className="col-span-3 bg-grayBlue-900 rounded-l-2xl h-full"></div>
        </div>
    );
}
