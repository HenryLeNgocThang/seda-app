import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WageCertificateComponent } from './wage-certificate.component';

const routes: Routes = [
  {
    path: '',
    component: WageCertificateComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WageCertificateRoutingModule { }
