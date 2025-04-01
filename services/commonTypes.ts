export interface SummaryItem {
    type: string;
    label: string;
    value: string;
    description?: string;
  }

export interface ChartValue {
    key: string;
    value: number;
  }

export interface Chart {
    type: string;
    label: string;
    unit: string;
    values: ChartValue[];
  }

export interface Data {
    summary: SummaryItem[];
    charts?: Chart[];
  }

export interface IResponse {
    status: string;
    message: string;
    data: Data;
  }