import { Popover, PopoverContent, PopoverTrigger } from '@/UI/atoms/Popover';
import { DateRangeButton } from '@/UI/atoms/DateRangeButton';
import { DateRangeCalendar } from './DateRangeCalendar';

interface DateSelectorProps {
    date?: Date;
    label: string;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    onSelect: (date: Date | undefined) => void;
    disabled?: (date: Date) => boolean;
    defaultMonth: Date;
    otherDate?: Date;
}

export const DateSelector = ({
    date,
    label,
    isOpen,
    onOpenChange,
    onSelect,
    disabled,
    defaultMonth,
    otherDate,
}: DateSelectorProps) => {
    return (
        <Popover open={isOpen} onOpenChange={onOpenChange}>
            <PopoverTrigger asChild>
                <div className="w-full">
                    <DateRangeButton
                        date={date}
                        label={label}
                        onClick={() => onOpenChange(true)}
                    />
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 border-none" align="start">
                <DateRangeCalendar
                    selectedDate={date || otherDate}
                    otherDate={otherDate}
                    onSelect={onSelect}
                    disabled={disabled}
                    defaultMonth={defaultMonth}
                />
            </PopoverContent>
        </Popover>
    );
};