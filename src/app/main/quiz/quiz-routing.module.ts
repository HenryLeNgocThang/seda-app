import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
    {
        path: '',
        component: QuizComponent,
        pathMatch: 'full'
    },
    {
        path: 'category/:category',
        component: CategoryComponent,
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class QuizRoutingModule { }
