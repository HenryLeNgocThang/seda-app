import { Component } from '@angular/core';
import { appModuleAnimation } from '../../shared/animations/routerTransition';
import data from '../../../assets/data/quizzes.json';

@Component({
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  animations: [appModuleAnimation()]
})
export class QuizComponent {
  score: number = 0;
  quizzes = data;

  constructor() {
    console.log(this.quizzes);
  }
}
