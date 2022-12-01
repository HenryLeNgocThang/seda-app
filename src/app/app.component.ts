import { Component } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = "Seda App";
  drawerToggled: boolean = false;

  constructor(
    private platform: Platform,
  ) {
    this.Init();
  }

  Init(): void {
    if (this.platform.ANDROID || this.platform.IOS) {
      this.drawerToggled = true;
    }
  }
}