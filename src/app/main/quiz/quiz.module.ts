import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizRoutingModule } from './quiz-routing.module';

import { MaterialModule } from '../../material/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialBootstrapModule } from '../../material-bootstrap/material-bootstrap.module';

import { QuizComponent } from './quiz.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
    declarations: [
        QuizComponent,
        CategoryComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        MDBBootstrapModule,
        MaterialBootstrapModule,
        QuizRoutingModule,
        MDBBootstrapModule.forRoot(),
        MaterialBootstrapModule,
    ]
})
export class QuizModule {}
