import { Component, OnInit } from '@angular/core';
import { appModuleAnimation } from '../../shared/animations/routerTransition';

@Component({
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.scss'],
  animations: [appModuleAnimation()]
})
export class AbsenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
