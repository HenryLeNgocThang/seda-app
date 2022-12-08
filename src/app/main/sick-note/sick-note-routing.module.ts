import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SickNoteComponent } from './sick-note.component';

const routes: Routes = [
    {
        path: '',
        component: SickNoteComponent,
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SickNoteRoutingModule { }
