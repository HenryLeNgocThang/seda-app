import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidayRequestRoutingModule } from './holiday-requests-routing.module';

import { MaterialModule } from '../../material/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialBootstrapModule } from '../../material-bootstrap/material-bootstrap.module';

import { HolidayRequestsComponent } from './holiday-requests.component';

@NgModule({
    declarations: [
        HolidayRequestsComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        MDBBootstrapModule,
        MaterialBootstrapModule,
        HolidayRequestRoutingModule,
        MDBBootstrapModule.forRoot(),
        MaterialBootstrapModule,
    ]
})
export class HolidayRequestModule {}
