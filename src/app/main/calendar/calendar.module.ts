import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarRoutingModule } from './calendar-routing.module';

import { MaterialModule } from '../../theme/material/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialBootstrapModule } from '../../theme/material-bootstrap/material-bootstrap.module';

import { CalendarComponent } from './calendar.component';

@NgModule({
    declarations: [
        CalendarComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        MDBBootstrapModule,
        MaterialBootstrapModule,
        CalendarRoutingModule,
        MDBBootstrapModule.forRoot(),
        MaterialBootstrapModule,
    ]
})
export class CalendarModule {}
