import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './main/home/home.component';
import { QuizComponent } from './main/quiz/quiz.component';
import { SickNoteComponent } from './main/sick-note/sick-note.component';
import { HolidayRequestsComponent } from './main/holiday-requests/holiday-requests.component';
import { CalendarComponent } from './main/calendar/calendar.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  },
  {
    path: 'sick-note',
    component: SickNoteComponent
  },
  {
    path: 'holiday-requests',
    component: HolidayRequestsComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
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
