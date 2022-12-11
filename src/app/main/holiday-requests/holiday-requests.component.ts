import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { appModuleAnimation } from '../../shared/animations/routerTransition';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

export interface PeriodicElement {
  position: number;
  number: number;
  period: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, number: 1, period: '23.12.2022 - 06.01.2023' },
  { position: 2, number: 5, period: '23.12.2022 - 06.01.2023' },
  { position: 3, number: 12, period: '23.12.2022 - 06.01.2023' },
  { position: 4, number: 20, period: '23.12.2022 - 06.01.2023' },
  { position: 5, number: 5, period: '23.12.2022 - 06.01.2023' },
  { position: 6, number: 5, period: '23.12.2022 - 06.01.2023' },
  { position: 7, number: 5, period: '23.12.2022 - 06.01.2023' },
  { position: 8, number: 5, period: '23.12.2022 - 06.01.2023' },
  { position: 9, number: 5, period: '23.12.2022 - 06.01.2023' },
  { position: 10, number: 5, period: '23.12.2022 - 06.01.2023' },
  { position: 11, number: 10, period: '23.12.2022 - 06.01.2023' },
  { position: 12, number: 10, period: '23.12.2022 - 06.01.2023' },
  { position: 13, number: 10, period: '23.12.2022 - 06.01.2023' },
  { position: 14, number: 10, period: '23.12.2022 - 06.01.2023' },
  { position: 15, number: 10, period: '23.12.2022 - 06.01.2023' },
  { position: 16, number: 10, period: '23.12.2022 - 06.01.2023' },
  { position: 17, number: 2, period: '23.12.2022 - 06.01.2023' },
  { position: 18, number: 2, period: '23.12.2022 - 06.01.2023' },
  { position: 19, number: 2, period: '23.12.2022 - 06.01.2023' },
  { position: 20, number: 2, period: '23.12.2022 - 06.01.2023' },
];

@Component({
  templateUrl: './holiday-requests.component.html',
  styleUrls: ['./holiday-requests.component.scss'],
  animations: [appModuleAnimation()]
})
export class HolidayRequestsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};
  @ViewChild(MatSort) sort: MatSort = <MatSort>{};
  displayedColumns: string[] = ['position', 'number', 'period'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(
    private _liveAnnouncer: LiveAnnouncer
  ) {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}