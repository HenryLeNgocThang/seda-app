import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Platform } from '@angular/cdk/platform';

import { MatDialog } from '@angular/material/dialog';

import { PwaComponent } from './layout/pwa/pwa.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = "Seda App";
  drawerToggled: boolean = true;
  mode: MatDrawerMode = "side";
  dialogRef: MatDialog;

  constructor(
    private platform: Platform,
    private _dialog: MatDialog
  ) {
    this.dialogRef = this._dialog;
  }

  ngOnInit(): void {
    if (this.platform.ANDROID || this.platform.IOS) {
      this.dialogRef.open(PwaComponent);
      this.mode = "over";
      this.drawerToggled = false;
    }
  }
}