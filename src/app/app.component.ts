import { Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = "Seda App";
  drawerToggled: boolean = false;
  mode: MatDrawerMode = "side";

  constructor(
    private platform: Platform,
  ) {
    this.Init();
  }

  Init(): void {
    if (this.platform.ANDROID || this.platform.IOS) {
      this.mode = "over";
      this.drawerToggled = true;
    }
  }
}