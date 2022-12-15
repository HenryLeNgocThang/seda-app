import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PayrollRoutingModule } from './payroll-routing.module';

import { MaterialModule } from '../../theme/material/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialBootstrapModule } from '../../theme/material-bootstrap/material-bootstrap.module';

import { PayrollComponent } from './payroll.component';

@NgModule({
  declarations: [
    PayrollComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    MaterialModule,
    MDBBootstrapModule,
    MaterialBootstrapModule,
    ReactiveFormsModule,
    PayrollRoutingModule,
    MDBBootstrapModule.forRoot(),
    MaterialBootstrapModule,
  ]
})
export class PayrollModule { }
