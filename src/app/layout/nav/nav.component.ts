import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'sidenav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {
  constructor (
    private platform: Platform,
    private _matDrawer: MatDrawer
  ) {
    this.Init();
  }

  Init(): void {
    if (!this.platform.ANDROID && !this.platform.IOS) {
      this._matDrawer.toggle();
    }
  }
}