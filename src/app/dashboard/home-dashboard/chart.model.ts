import { Chart, ChartOptions, ChartDataset } from 'chart.js';

export interface ChartConfiguration {
  type: 'line';
  data: ChartData;
  options: ChartOptions;
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset<'line'>[];
}

export interface ChartDataSet extends ChartDataset<'line'> {
  data: number[];
  label: string;
}
