import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidayRequestsComponent } from './holiday-requests.component';

const routes: Routes = [
    {
        path: '',
        component: HolidayRequestsComponent,
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HolidayRequestRoutingModule { }
