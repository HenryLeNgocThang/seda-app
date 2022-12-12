import { Component, OnInit, ElementRef } from '@angular/core';
import { appModuleAnimation } from '../../shared/animations/routerTransition';

import { Chart, registerables } from 'chart.js';
import { MatHeaderRowDef } from '@angular/material/table';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [appModuleAnimation()]
})
export class HomeComponent implements OnInit {
  chart: any;

  constructor(
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    Chart.register(...registerables);
    this.setChart();
  }

  setChart(): void {
    const data = [];
    const htmlRef = this.elementRef.nativeElement.querySelector(`#myChart`);

    for (let i = 0; i < 7; i++) {
      let d = new Date();
      
      d.setDate(d.getDate() - i);
      data.push({
        day: d.toLocaleDateString("de-DE"),
        count: Math.floor(Math.random() * 10) + 1
      })
    }

    this.chart = new Chart(htmlRef, {
        type: 'line',
        data: {
          labels: data.map(row => row.day),
          datasets: [
            {
              label: 'Aktivität',
              data: data.map(row => row.count),
              borderColor: "#009999"
            }
          ]
        }
      }
    );
  }
}
