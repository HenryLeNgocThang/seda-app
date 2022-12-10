import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { appModuleAnimation } from '../../../shared/animations/routerTransition';
import { dataChange } from '../../../shared/animations/dataUpdateTransition';

import { QuizService } from '../../../services/quiz/quiz.service';

@Component({
  templateUrl: './category.component.html',
  animations: [
    appModuleAnimation(),
    dataChange
  ]
})
export class CategoryComponent {
  quizData: any = [];
  category: string = '';
  question: any = {};
  options: Object[] = [];
  correctAnswers: number = 0;
  pageIndex: number = 0;
  animationUpdateState: 'entering' | 'done' = 'done';

  constructor(
    private _quizService: QuizService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.category = params['category'];
    });

    this._quizService.subscribe(data => {
      this.quizData = data;
      this.handlePage();
    }, this.category);
  }

  handlePage(): void {
    if (this.pageIndex < this.quizData.questions.length) {
      this.question = this.quizData.questions[this.pageIndex];
      this.options = this.shuffle(this.question.options);
      this.pageIndex++;
      this.handleTransition();
      return;
    }

    console.log(this.correctAnswers);
  }

  handleTransition(): void {
    this.animationUpdateState = "entering";
  }

  handleSelectedOption(isCorrect: boolean): void {
    if (isCorrect) this.correctAnswers++;
    this.handlePage();
  }

  shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  };
}
