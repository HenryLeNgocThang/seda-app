import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
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