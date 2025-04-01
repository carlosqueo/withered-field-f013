import { IResponse } from '@services/commonTypes';

export const mockResponse: IResponse = {
    status: 'success',
    message: 'Data retrieved successfully',
    data: {
        summary: [
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
        charts: [
            {
                type: 'bar',
                label: 'Consumo',
                unit: 'gal',
                values: [
                    { key: 'Ene', value: 20000 },
                    { key: 'Feb', value: 35000 },
                    { key: 'Mar', value: 36500 },
                    { key: 'Abr', value: 50000 },
                    { key: 'May', value: 34400 },
                    { key: 'Jun', value: 40000 },
                    { key: 'Jul', value: 23000 },
                    { key: 'Ago', value: 30000 },
                    { key: 'Sep', value: 22350 },
                    { key: 'Oct', value: 22300 },
                    { key: 'Nov', value: 44150 },
                    { key: 'Dec', value: 33250 },
                ],
            },
        ],
    }
};