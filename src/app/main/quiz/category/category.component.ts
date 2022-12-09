import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { appModuleAnimation } from '../../../shared/animations/routerTransition';

import { QuizService } from '../../../services/quiz/quiz.service';

@Component({
  templateUrl: './category.component.html',
  animations: [appModuleAnimation()]
})
export class CategoryComponent {
  quizData: any = [];
  category: string = '';
  question: any = {};
  score: number = 0;
  pageIndex: number = 0;

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
      this.pageIndex++;
      return;
    }

    console.log("THE END");
  }

  handleSelectedAnswer(isCorrect: boolean): void {
    this.handlePage();
  }
}
