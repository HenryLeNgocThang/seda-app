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
    path: 'sick-note',
    loadChildren: () => import('./main/sick-note/sick-note.module').then((m) => m.SickNoteModule),
  },
  {
    path: 'holiday-requests',
    loadChildren: () => import('./main/holiday-requests/holiday-requests.module').then((m) => m.HolidayRequestModule),
  },
  {
    path: 'calendar',
    loadChildren: () => import('./main/calendar/calendar.module').then((m) => m.CalendarModule),
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
