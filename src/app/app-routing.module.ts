import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./main/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'quiz',
    loadChildren: () => import('./main/quiz/quiz.module').then(m => m.QuizModule)
  },
  {
    path: 'absence',
    loadChildren: () => import('./main/absence/absence.module').then((m) => m.AbsenceModule),
  },
  {
    path: 'holiday-requests',
    loadChildren: () => import('./main/holiday-requests/holiday-requests.module').then((m) => m.HolidayRequestModule),
  },
  {
    path: 'wage-certificate',
    loadChildren: () => import('./main/wage-certificate/wage-certificate.module').then((m) => m.WageCertificateModule),
  },
  {
    path: 'payroll',
    loadChildren: () => import('./main/payroll/payroll.module').then((m) => m.PayrollModule),
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
