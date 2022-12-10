import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { appModuleAnimation } from '../../../shared/animations/routerTransition';
import { dataChange } from '../../../shared/animations/dataUpdateTransition';

import { QuizService } from '../../../services/quiz/quiz.service';

interface QuizStates {
  0: 'start',
  1: 'progress',
  2: 'end'
}

@Component({
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  animations: [
    appModuleAnimation(),
    dataChange
  ]
})
export class CategoryComponent {
  // Data from JSON
  quizData: any = [];
  category: string = '';
  technicalName: string = '';
  question: any = {};
  options: Object[] = [];
  categoryVideo: string = '';

  // Helper variables
  pageIndex: number = 0;
  quizStates: QuizStates = {
    0: 'start',
    1: 'progress',
    2: 'end'
  }
  quizState: string = this.quizStates[0];
  correctAnswers: number = 0;
  isDisabled: boolean = false;
  animationUpdateState: 'entering' | 'done' = 'done';
  history: any = [];

  constructor(
    private _quizService: QuizService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.technicalName = params['category'];
    });

    this._quizService.subscribe(data => {
      this.quizData = data;
      this.history = this.quizData;
      this.category = this.quizData.category;
      this.categoryVideo = `/assets/video/${this.quizData.video}`;
      this.handlePage();
    }, this.technicalName);
  }

  handlePage(state?: string): void {
    this.handleTransition();
    this.isDisabled = false;

    switch (state) {
      case 'start':
        this.pageIndex = 1;
        this.quizState = this.quizStates[0];
        break;
      case 'progress':
          this.quizState = this.quizStates[1];
        break;
      case 'end':
          this.quizState = this.quizStates[2];
        break;
      default:
        if (this.pageIndex < this.quizData.questions.length) {
          this.question = this.quizData.questions[this.pageIndex];
          this.options = this.shuffle(this.question.options);
          this.pageIndex++;
        }
        break;
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
