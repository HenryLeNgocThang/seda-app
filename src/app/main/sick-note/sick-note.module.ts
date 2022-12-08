import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SickNoteRoutingModule } from './sick-note-routing.module';

import { MaterialModule } from '../../material/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialBootstrapModule } from '../../material-bootstrap/material-bootstrap.module';

import { SickNoteComponent } from './sick-note.component';

@NgModule({
    declarations: [
        SickNoteComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        MDBBootstrapModule,
        MaterialBootstrapModule,
        SickNoteRoutingModule,
        MDBBootstrapModule.forRoot(),
        MaterialBootstrapModule,
    ]
})
export class SickNoteModule {}
