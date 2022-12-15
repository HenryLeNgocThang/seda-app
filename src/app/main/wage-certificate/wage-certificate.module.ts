import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WageCertificateRoutingModule } from './wage-certificate-routing.module';

import { MaterialModule } from '../../theme/material/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialBootstrapModule } from '../../theme/material-bootstrap/material-bootstrap.module';

import { WageCertificateComponent } from './wage-certificate.component';

@NgModule({
  declarations: [
    WageCertificateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MDBBootstrapModule,
    MaterialBootstrapModule,
    WageCertificateRoutingModule,
    MDBBootstrapModule.forRoot(),
    MaterialBootstrapModule,
  ]
})
export class WageCertificateModule { }
