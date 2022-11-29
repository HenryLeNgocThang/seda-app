import { Component } from '@angular/core';
import { appModuleAnimation } from '../../shared/animations/routerTransition';

@Component({
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  animations: [appModuleAnimation()]
})
export class QuizComponent {

}
