export interface TimeSeriesDataPoint {
    timestamp: string;
    value: number;
}

export interface MetricSeries {
    values: TimeSeriesDataPoint[];
    unit: string;
}

export interface MetricsData {
    charts?: Array<{
        values: TimeSeriesDataPoint[];
        unit: string;
    }>;
    summary?: Array<{
        label: string;
        value: string | number;
    }>;
}

export interface AirQualityMetric {
    value: number;
    unit: string;
    status: string;
}

export interface AirQualityData {
    co: MetricSeries;
    co2: MetricSeries;
    tvoc: MetricSeries;
    pm1: MetricSeries;
    pm25: MetricSeries;
    summary: {
        currentAqi: number;
        status: string;
        tvoc: AirQualityMetric;
        pm1: AirQualityMetric;
        pm25: AirQualityMetric;
    };
}