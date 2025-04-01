import { IResponse } from '@services/commonTypes';

export const mockResponse: IResponse = {
    status: 'success',
    message: 'Data retrieved successfully',
    data: {
        summary: [
            {
                type: 'text',
                label: 'Por ocupante',
                value: '0,23 kg de CO2/mes',
            },
            {
                type: 'text',
                label: 'Por metro cuadrado',
                value: '0.00178 kg/m² al mes',
            },
            {
                type: 'text',
                label: 'Área de la copropiedad',
                value: '200 m2',
            },
        ],
        charts: [
            {
                type: 'bar',
                label: 'Consumo',
                unit: 'ppm',
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
    }
};

export const AirQualityMetricResponse: IResponse = {
    status: 'success',
    message: 'Data retrieved successfully',
    data: {
        summary: [
            {
                type: 'text',
                label: 'Calidad del aire',
                value: '50',
                description: 'Buena',
            },
        ],
    }
};