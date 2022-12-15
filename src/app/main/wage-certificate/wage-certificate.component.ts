import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { appModuleAnimation } from '../../shared/animations/routerTransition';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  year: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {year: 2022, name: 'Januar', position: 1},
  {year: 2022, name: 'Februar', position: 2},
  {year: 2022, name: 'März', position: 3},
  {year: 2022, name: 'April', position: 4},
  {year: 2022, name: 'Mai', position: 5},
  {year: 2022, name: 'Juni', position: 6},
  {year: 2022, name: 'Juli', position: 7},
  {year: 2022, name: 'August', position: 8},
  {year: 2022, name: 'September', position: 9},
  {year: 2022, name: 'Oktober', position: 10},
  {year: 2022, name: 'November', position: 11},
  {year: 2022, name: 'Dezember', position: 12},
];

@Component({
  templateUrl: './wage-certificate.component.html',
  styleUrls: ['./wage-certificate.component.scss'],
  animations: [appModuleAnimation()]
})
export class WageCertificateComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  displayedColumns: string[] = ['name', 'year', 'position'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
