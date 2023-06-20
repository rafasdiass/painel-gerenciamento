import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements AfterViewInit {
  @ViewChild('creditSalesCanvas') creditSalesCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('cashSalesCanvas') cashSalesCanvas!: ElementRef<HTMLCanvasElement>;
  creditSalesChart!: Chart;
  cashSalesChart!: Chart;

  ngAfterViewInit() {
    this.creditSalesChart = new Chart(this.creditSalesCanvas.nativeElement, this.getChartConfig());
    this.cashSalesChart = new Chart(this.cashSalesCanvas.nativeElement, this.getChartConfig());
  }

  getChartConfig(): any {
    return {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Sales',
          data: [12, 19, 3, 5, 2, 3, 8, 9, 4, 7, 6, 10]
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true
          },
          y: {
            display: true
          },
        }
      }
    };
  }
}
