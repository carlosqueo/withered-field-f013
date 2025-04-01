import { IResponse } from '@services/commonTypes';

export const mockResponse: IResponse = {
    status: 'success',
    message: 'Data retrieved successfully',
    data: {
        summary: [
            {
                type: 'text',
                label: 'Consumo total',
                value: '536 kBTU/mes'
            },
            {
                type: 'text',
                label: 'Por ocupante',
                value: '2,7 kBTU/mes'
            },
            {
                type: 'text',
                label: 'Por metro cuadrado',
                value: '2,7 kBTU/mes'
            },
            {
                type: 'text',
                label: 'Área de la copropiedad',
                value: '200 m2'
            }
        ],
        charts: [
            {
                type: 'bar',
                label: 'Consumo',
                unit: 'kBTU',
                values: [
                    { key: 'Ene', value: 186 },
                    { key: 'Feb', value: 44 },
                    { key: 'Mar', value: 237 },
                    { key: 'Abr', value: 473 },
                    { key: 'May', value: 723 },
                    { key: 'Jun', value: 814 },
                    { key: 'Jul', value: 989 },
                    { key: 'Ago', value: 900 },
                    { key: 'Sep', value: 750 },
                    { key: 'Oct', value: 600 },
                    { key: 'Nov', value: 550 },
                    { key: 'Dec', value: 450 }
                ]
            }
        ]
    }
};