import { Card } from '@/UI/atoms/card';
import { cn } from '@/lib/utils';

interface MetricCardProps {
    title: string;
    value: string | number;
    unit?: string;
    status?: string;
    variant?: 'success' | 'warning' | 'error' | 'info';
}

const variantStyles = {
    success: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600',
    info: 'text-blue-600'
};

export function MetricCard({ title, value, unit, status, variant = 'info' }: MetricCardProps) {
    return (
        <Card className="p-6 bg-white flex items-center flex-col">
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <div className="mt-2 flex items-baseline">
                <p className="text-4xl font-semibold tracking-tight">{value}</p>
                {unit && <span className="ml-2 text-sm text-gray-500">{unit}</span>}
            </div>
            {status && (
                <p className={cn('mt-2 text-sm font-medium', variantStyles[variant])}>
                    {status}
                </p>
            )}
        </Card>
    );
}