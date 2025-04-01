import { useState } from 'react';
import { format, isValid, isBefore, isFuture } from 'date-fns';
import { es } from 'date-fns/locale';
import { ChevronDownIcon } from 'lucide-react';
import { Button } from '@/UI/atoms/Button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/UI/atoms/DropdownMenu';
import { DateRangeSelector } from './DateRangeSelector';

export const DateFilter = () => {
    const [open, setOpen] = useState(false);
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);
    const [displayValue, setDisplayValue] = useState('Rango');

    const handleOptionSelect = (option: 'today' | 'week' | 'month' | 'year' | 'range') => {
        if (option !== 'range') {
            const today = new Date();
            switch (option) {
            case 'today':
                setStartDate(today);
                setEndDate(today);
                setDisplayValue('Hoy');
                setOpen(false);
                break;
            case 'week':
                setStartDate(new Date(today.setDate(today.getDate() - 7)));
                setEndDate(new Date());
                setDisplayValue('Semana');
                setOpen(false);
                break;
            case 'month':
                setStartDate(new Date(today.setMonth(today.getMonth() - 1)));
                setEndDate(new Date());
                setDisplayValue('Mes');
                setOpen(false);
                break;
            case 'year':
                setStartDate(new Date(today.setFullYear(today.getFullYear() - 1)));
                setEndDate(new Date());
                setDisplayValue('Año');
                setOpen(false);
                break;
            }
        }
    };

    const handleApplyRange = () => {
        if (startDate && endDate && isValid(startDate) && isValid(endDate)) {
            setDisplayValue(`${format(startDate, 'dd/MM/yy', { locale: es })} - ${format(endDate, 'dd/MM/yy', { locale: es })}`);
            setOpen(false);
        }
    };

    const isDateRangeValid = () => {
        if (!startDate || !endDate) return false;
        if (!isValid(startDate) || !isValid(endDate)) return false;
        if (isFuture(startDate) || isFuture(endDate)) return false;
        if (isBefore(endDate, startDate)) return false;
        return true;
    };

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className="bg-white rounded-lg border border-gray-200 px-4 py-2 text-base font-normal flex items-center justify-between gap-2 hover:bg-gray-50"
                >
                    {displayValue}
                    <ChevronDownIcon className="h-4 w-4 opacity-50" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[300px] p-0 bg-white rounded-lg border border-snowWhite-1000 shadow-lg mr-32">
                <div className="flex flex-col divide-y divide-snowWhite-600">
                    <Button
                        variant="ghost"
                        className="w-full justify-start rounded-none px-4 py-3 text-base font-normal hover:bg-gray-50"
                        onClick={() => handleOptionSelect('today')}
                    >
                        Hoy
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full justify-start rounded-none px-4 py-3 text-base font-normal hover:bg-gray-50"
                        onClick={() => handleOptionSelect('week')}
                    >
                        Semana
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full justify-start rounded-none px-4 py-3 text-base font-normal hover:bg-gray-50"
                        onClick={() => handleOptionSelect('month')}
                    >
                        Mes
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full justify-start rounded-none px-4 py-3 text-base font-normal hover:bg-gray-50"
                        onClick={() => handleOptionSelect('year')}
                    >
                        Año
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full justify-start rounded-none px-4 py-3 text-base font-normal hover:bg-gray-50"
                        onClick={() => handleOptionSelect('range')}
                    >
                        Rango
                    </Button>
                    <div className="flex flex-col gap-4 p-4">
                        <DateRangeSelector
                            startDate={startDate}
                            endDate={endDate}
                            onStartDateChange={setStartDate}
                            onEndDateChange={setEndDate}
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <Button
                                variant="outline"
                                onClick={() => setOpen(false)}
                                className="w-full bg-white hover:bg-gray-50"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={handleApplyRange}
                                className="w-full bg-orange-1000 hover:bg-orange-900 text-white"
                                disabled={!isDateRangeValid()}
                            >
                                Apply
                            </Button>
                        </div>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
