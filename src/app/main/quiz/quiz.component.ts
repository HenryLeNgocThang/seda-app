import { Component } from '@angular/core';
import { appModuleAnimation } from '../../shared/animations/routerTransition';
import { QuizService } from '../../services/quiz/quiz.service';

@Component({
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  animations: [appModuleAnimation()]
})
export class QuizComponent {
  quizData: any = [];

  constructor(
    private _quizService: QuizService
  ) {
    this._quizService.subscribe((data: Object) => {
      this.quizData = data
    });
  }
}
