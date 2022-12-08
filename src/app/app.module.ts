import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

// Main component
import { AppComponent } from './app.component';

// Component Frameworks
import { MaterialModule } from './material/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialBootstrapModule } from './material-bootstrap/material-bootstrap.module';

// Layout components
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { PwaComponent } from './layout/pwa/pwa.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    // Main component
    AppComponent,
    // Layout components
    SidebarComponent,
    HeaderComponent,
    PwaComponent,
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
    MDBBootstrapModule.forRoot(),
    MaterialBootstrapModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
