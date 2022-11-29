import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav'

@Component({
  selector: 'sidenav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {
  constructor (
    private _matDrawer: MatDrawer
  ) {
    this.Init();
  }

  Init(): void {
    this._matDrawer.toggle();
  }
}