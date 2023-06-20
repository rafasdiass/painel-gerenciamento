import { Chart, ChartOptions, ChartType, ChartDataset } from 'chart.js';

export interface ChartConfiguration {
  type: ChartType | string;
  data: ChartData;
  options: ChartOptions;
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataSet[];
}

export interface ChartDataSet extends ChartDataset<'line'> {
  data: number[];
  label: string;
}
