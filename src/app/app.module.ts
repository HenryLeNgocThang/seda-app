import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Layout components
import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';

// Pages (routing pages)
import { QuizComponent } from './main/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    NavComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
