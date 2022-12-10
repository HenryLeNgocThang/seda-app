import { Injectable } from '@angular/core';
import data from '../../../assets/data/quizzes.json';

@Injectable({
  providedIn: 'root'
})

export class QuizService {
  quizData: Object = {};

  public subscribe(callback: (parameter: Object) => void, category?: string): void {
    this.quizData = data;

    if (category !== undefined) {
      callback(this.quizData[category as keyof typeof this.quizData]);
      return;
    }

    callback(this.quizData);
    return;
  }
}
