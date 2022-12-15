import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsenceRoutingModule } from './absence-routing.module';

import { MaterialModule } from '../../theme/material/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialBootstrapModule } from '../../theme/material-bootstrap/material-bootstrap.module';

import { AbsenceComponent } from './absence.component';

@NgModule({
    declarations: [
        AbsenceComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        MDBBootstrapModule,
        MaterialBootstrapModule,
        AbsenceRoutingModule,
        MDBBootstrapModule.forRoot(),
        MaterialBootstrapModule,
    ]
})
export class AbsenceModule {}
