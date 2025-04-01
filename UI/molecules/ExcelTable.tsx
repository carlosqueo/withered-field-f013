import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@atoms/Table';
import React from 'react';

const ExcelTable = ({
    data,
}: {
    data?: { [key: string]: unknown }[] | null;
}) => {
    const headers = data ? Object.keys(data[0]) : [];
    const values = data ? data.map(row => Object.values(row)) : [];
    if (!data) return null;

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {headers?.map(header => (
                        <TableHead className="cursor-pointer" key={header}>
                            {header}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {values?.map((row, rowIndex) => (
                    <TableRow key={`row-${rowIndex}`}>
                        {Object.values(row).map((value, valueIndex) => (
                            <TableCell key={`cell-${rowIndex}-${valueIndex}`}>
                                {String(value)}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export { ExcelTable };
