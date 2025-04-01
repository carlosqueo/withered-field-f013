'use client';

import { Div } from '@atoms/Div';
import { cn } from '@lib/utils';
import { ArrowUp, XCircleIcon } from 'lucide-react';
import { useState } from 'react';
import * as XLSX from 'xlsx';

interface IDropOrUploadExcel {
    label?: string;
    onLoad?: (_image: unknown) => void;
}

const DropOrUploadExcel = ({
    label,
    onLoad = () => {},
}: IDropOrUploadExcel) => {
    const [excelData, setExcelData] = useState<unknown[]>();

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const loadExcelFile = (file: File | null) => {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = e => {
            const data = e.target?.result;
            if (!data) return;
            const workbook = XLSX.read(data, { type: 'binary' });
            const [sheetName] = workbook.SheetNames;
            const sheet = workbook.Sheets[sheetName];
            const sheetData = XLSX.utils.sheet_to_json(sheet, {
                raw: false,
                defval: '',
            });
            setExcelData(sheetData);
            onLoad(sheetData);
        };
        reader.readAsArrayBuffer(file);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files?.[0];
        loadExcelFile(file);
    };

    const handleLoad = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.xls,.xlsx';
        input.onchange = e => {
            const target = e.target as HTMLInputElement;
            const file = target.files ? target.files[0] : null;
            loadExcelFile(file);
        };
        input.click();
    };

    return (
        <div className="flex flex-col gap-3">
            <Div
                // hidden={Boolean(excelData)}
                onClick={handleLoad}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className={cn(
                    excelData ? 'h-[5rem] border-none' : 'h-[13rem] border-2 ',
                    'flex items-center transition-all duration-500 overflow-hidden cursor-pointer relative rounded-lg border-dashed border-gray-300 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-10000 focus:ring-offset-2'
                )}
            >
                <Div
                    className="select-none flex flex-col items-center w-full"
                    hidden={Boolean(excelData)}
                >
                    <ArrowUp className="mx-auto h-12 w-12 text-gray-400" />
                    <span className="mt-2 block text-sm font-semibold text-grayBlue-1200">
                        {label}
                    </span>
                </Div>
                <Div
                    className={cn(
                        !excelData ? 'opacity-0' : 'opacity-100',
                        'absolute inset-0 bg-green-100 flex items-center justify-center transition-opacity  duration-500 ease-in-out'
                    )}
                >
                    <XCircleIcon className="h-12 w-12 text-green-500" />
                    <span className="text-lg font-bold text-green-800">
                        Archivo cargado correctamente
                    </span>
                </Div>
            </Div>
        </div>
    );
};

export { DropOrUploadExcel };
