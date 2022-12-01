import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

// Main component
import { AppComponent } from './app.component';

// Layout components
import { NavComponent } from './layout/nav/nav.component';
import { PwaComponent } from './layout/pwa/pwa.component';
import { HeaderComponent } from './layout/header/header.component';

// "Pages" (routing pages)
import { HomeComponent } from './main/home/home.component';
import { QuizComponent } from './main/quiz/quiz.component';
import { SickNoteComponent } from './main/sick-note/sick-note.component';
import { HolidayRequestsComponent } from './main/holiday-requests/holiday-requests.component';
import { CalendarComponent } from './main/calendar/calendar.component';

@NgModule({
  declarations: [
    // Main component
    AppComponent,
    // Layout components
    NavComponent,
    HeaderComponent,
    PwaComponent,
    // "Pages"
    HomeComponent,
    QuizComponent,
    SickNoteComponent,
    HolidayRequestsComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
