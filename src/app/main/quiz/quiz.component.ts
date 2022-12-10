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
  categories: string[] = [];
  technicalNames: string[] = [];

  constructor(
    private _quizService: QuizService
  ) {
    this._quizService.subscribe((data: Object) => {
      this.quizData = data;

      for (const key in this.quizData) {
        if (Object.prototype.hasOwnProperty.call(this.quizData, key)) {
          const element = this.quizData[key as typeof this.quizData];
          this.categories.push(element.category);
          this.technicalNames.push(element.technicalName);
        }
      }
    });
  }
}
