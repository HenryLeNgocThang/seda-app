import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { appModuleAnimation } from '../../../shared/animations/routerTransition';
import { dataChange } from '../../../shared/animations/dataUpdateTransition';

import { QuizService } from '../../../services/quiz/quiz.service';

@Component({
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
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

  pageIndex: number = 0;

  correctAnswers: number = 0;
  isDisabled: boolean = false;
  isQuizEnd: boolean = false;
  animationUpdateState: 'entering' | 'done' = 'done';

  history: any = [];

  constructor(
    private _quizService: QuizService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.category = params['category'];
    });

    this._quizService.subscribe(data => {
      this.quizData = data;
      this.history = data;
      this.handlePage();
    }, this.category);
  }

  handlePage(showResults?: boolean): void {
    this.handleTransition();

    if (showResults) {
      this.isQuizEnd = showResults;
      return;
    }

    this.isDisabled = false;

    if (this.pageIndex < this.quizData.questions.length) {
      this.question = this.quizData.questions[this.pageIndex];
      this.options = this.shuffle(this.question.options);
      this.pageIndex++;
      return;
    }
  }

  handleTransition(): void {
    this.animationUpdateState = "entering";
  }

  handleSelectedOption(event: any, isCorrect: boolean, index: number): void {
    this.isDisabled = true;
    this.history.questions[this.pageIndex - 1].options[index]['isChosen'] = true;

    if (isCorrect) {
      this.correctAnswers++;
      event.target.classList.add('correct-answer');
      return;
    }

    if (!isCorrect) {
      event.target.classList.add('wrong-answer');
      return;
    }
  }

  shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  };
}
