import { colors } from '@/lib/colors';
import { Calendar } from '@/UI/atoms/Calendar';
import { startOfDay, isSameDay, eachDayOfInterval } from 'date-fns';

interface DateRangeCalendarProps {
    selectedDate?: Date;
    otherDate?: Date;
    onSelect: (date: Date | undefined) => void;
    disabled?: (date: Date) => boolean;
    defaultMonth: Date;
}

export const DateRangeCalendar = ({
    selectedDate,
    otherDate,
    onSelect,
    disabled,
    defaultMonth,
}: DateRangeCalendarProps) => {
    const getDateRangeModifiers = (selectedDate: Date | undefined, otherDate: Date | undefined) => {
        const modifiers: { selected: Date[]; range: Date[]; start: Date[]; end: Date[] } = {
            selected: [],
            range: [],
            start: [],
            end: []
        };

        if (selectedDate) {
            const start = startOfDay(selectedDate);

            if (!otherDate)
                // Si solo hay una fecha, la marcamos como start
                modifiers.start = [start];
            else {
                const end = startOfDay(otherDate);
                const [startDate, endDate] = start <= end ? [start, end] : [end, start];

                // Siempre marcamos las fechas de inicio y fin
                modifiers.start = [startDate];
                modifiers.end = [endDate];

                // Solo agregamos el rango si hay más de un día entre las fechas
                if (!isSameDay(startDate, endDate)) {
                    const rangeDates = eachDayOfInterval({ start: startDate, end: endDate });
                    modifiers.range = rangeDates.filter(date =>
                        !isSameDay(date, startDate) && !isSameDay(date, endDate)
                    );
                }
            }
        }

        return modifiers;
    };

    return (
        <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => onSelect(date ? startOfDay(date) : undefined)}
            disabled={disabled}
            defaultMonth={defaultMonth}
            modifiers={getDateRangeModifiers(selectedDate, otherDate)}
            modifiersStyles={{
                start: {
                    backgroundColor: colors.orange[1000],
                    color: 'white',
                    fontWeight: '500',
                    borderRadius: '9999px'
                },
                end: {
                    backgroundColor: colors.orange[1000],
                    color: 'white',
                    fontWeight: '500',
                    borderRadius: '9999px'
                },
                range: {
                    backgroundColor: colors.orange[700],
                    borderRadius: '9999px',
                    color: 'white',
                },
                selected: {
                    backgroundColor: colors.orange[1000],
                    color: 'white',
                    fontWeight: '500',
                    borderRadius: '9999px'
                }
            }}
            className="pt-6 bg-white rounded-3xl shadow-lg w-[280px]"
            monthsClassName="flex flex-col space-y-4"
            monthCaptionClassName="flex justify-between items-center h-8 relative mb-4 px-2"
            weekdaysClassName="grid grid-cols-7 mb-2"
            weekdayClassName="text-sm font-medium text-center"
            monthClassName="space-y-1"
            captionClassName="flex justify-between items-center w-full"
            captionLabelClassName="text-xl font-normal"
            buttonNextClassName="h-8 w-8 bg-transparent hover:bg-gray-50 rounded-full flex items-center justify-center border border-gray-200"
            buttonPreviousClassName="h-8 w-8 bg-transparent hover:bg-gray-50 rounded-full flex items-center justify-center border border-gray-200"
            navClassName="flex items-center gap-2"
            monthGridClassName="space-y-1"
            weekClassName="grid grid-cols-7 gap-0"
            dayClassName="p-0 flex items-center justify-center relative"
            dayButtonClassName="h-9 w-9 p-0 font-normal hover:bg-gray-50 rounded-full flex items-center justify-center text-sm"
            selectedClassName="!bg-orange-1000 !text-white hover:!bg-orange-900 !rounded-full"
            todayClassName="font-semibold"
            outsideClassName="text-gray-300"
            disabledClassName="text-gray-300 opacity-50"
            rangeMiddleClassName="!bg-orange-700 !rounded-full"
            hiddenClassName="invisible"
            style={{
                margin: '0 auto'
            }}
        />
    );
};