import { Component, OnInit, ElementRef } from '@angular/core';
import { appModuleAnimation } from '../../shared/animations/routerTransition';
import { ShuffleArray } from '../../shared/helpers/shuffleArray';

import { Chart, registerables } from 'chart.js';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [appModuleAnimation()]
})
export class HomeComponent implements OnInit {
  chart: any;
  knowledgeBase: string[] = [
    'Die Festplattenverschlüsselung (BitLocker) muss nach dem Einschalten des Rechners eingegeben werden.',
    'Man kann mit dem eigenen Benutzernamen (Windows) und PKI sich am Rechner anmelden.',
    'Der Karten-Button muss bei den Anmeldeoptionen angeklickt werden, um sich mit Smartcard (=PKI) anmelden zu können.',
    'Bei der Anmeldung mit PKI und der PIN muss das Ausweis im Leser gesteckt sein.',
    'Klickt an auf "Other user" kann man den Benutzernamen wechseln, wenn ein anderer Benutzer angezeigt wird.'
  ];
  alreadyKnew: string = '';

  constructor(
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.knowledgeBase = ShuffleArray.randoize(this.knowledgeBase);
    this.alreadyKnew = this.knowledgeBase[Math.floor(Math.random() * this.knowledgeBase.length)]
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
