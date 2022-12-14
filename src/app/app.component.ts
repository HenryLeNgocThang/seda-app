import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = "Seda App";
  drawerToggled: boolean = false;
  mode: MatDrawerMode = "side";

  constructor(
    private platform: Platform
  ) {}

  ngOnInit(): void {
    if (this.platform.ANDROID || this.platform.IOS) {
      this.mode = "over";
      this.drawerToggled = true;
    }
  }
}