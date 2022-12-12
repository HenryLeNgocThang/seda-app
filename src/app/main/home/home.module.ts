import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';

import { MaterialModule } from '../../theme/material/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialBootstrapModule } from '../../theme/material-bootstrap/material-bootstrap.module';

import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        MaterialModule,
        MDBBootstrapModule,
        MaterialBootstrapModule,
        MDBBootstrapModule.forRoot(),
        MaterialBootstrapModule,
    ]
})
export class HomeModule {}
