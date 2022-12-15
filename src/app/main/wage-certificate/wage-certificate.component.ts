import { Component, OnInit } from '@angular/core';
import { appModuleAnimation } from '../../shared/animations/routerTransition';

@Component({
  templateUrl: './wage-certificate.component.html',
  styleUrls: ['./wage-certificate.component.scss'],
  animations: [appModuleAnimation()]
})
export class WageCertificateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
