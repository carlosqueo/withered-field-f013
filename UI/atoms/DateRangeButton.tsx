import { Button } from '@/UI/atoms/Button';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface DateRangeButtonProps {
    date?: Date;
    label: string;
    onClick: () => void;
}

export const DateRangeButton = ({ date, label, onClick }: DateRangeButtonProps) => {
    return (
        <Button
            variant="ghost"
            className={cn(
                'w-full justify-start text-left font-normal border-b rounded-none',
                !date && 'text-muted-foreground'
            )}
            onClick={onClick}
        >
            {date ? format(date, 'dd/MM/yyyy', { locale: es }) : label}
        </Button>
    );
};