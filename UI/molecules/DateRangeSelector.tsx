import { DateSelector } from './DateSelector';
import { useState } from 'react';
import { addDays, isAfter, isBefore } from 'date-fns';

interface DateRangeSelectorProps {
    startDate: Date | undefined;
    endDate: Date | undefined;
    onStartDateChange: (date: Date | undefined) => void;
    onEndDateChange: (date: Date | undefined) => void;
}

export const DateRangeSelector = ({
    startDate,
    endDate,
    onStartDateChange,
    onEndDateChange,
}: DateRangeSelectorProps) => {
    const [startDateOpen, setStartDateOpen] = useState(false);
    const [endDateOpen, setEndDateOpen] = useState(false);
    const today = new Date();

    const handleStartDateChange = (date: Date | undefined) => {
        onStartDateChange(date);
        setStartDateOpen(false);
        if (date && endDate && isBefore(endDate, date))
            onEndDateChange(undefined);
    };

    const handleEndDateChange = (date: Date | undefined) => {
        onEndDateChange(date);
        setEndDateOpen(false);

        if (date && startDate && isAfter(startDate, date))
            onStartDateChange(undefined);
    };

    return (
        <div className="grid grid-cols-2 gap-4">
            <DateSelector
                date={startDate}
                label="Desde"
                isOpen={startDateOpen}
                onOpenChange={setStartDateOpen}
                onSelect={handleStartDateChange}
                defaultMonth={startDate || today}
                otherDate={endDate}
            />
            <DateSelector
                date={endDate}
                label="Hasta"
                isOpen={endDateOpen}
                onOpenChange={setEndDateOpen}
                onSelect={handleEndDateChange}
                defaultMonth={endDate || (startDate ? addDays(startDate, 1) : today)}
                otherDate={startDate}
            />
        </div>
    );
};