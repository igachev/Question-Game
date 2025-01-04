import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuestionResponseData, QuestionService } from 'src/app/core/services/question.service';

@Component({
  selector: 'app-question-game-page',
  templateUrl: './question-game-page.component.html',
  styleUrls: ['./question-game-page.component.scss']
})
export class QuestionGamePageComponent implements OnInit,OnDestroy {

  private questionSubscription!: Subscription;
  questions: QuestionResponseData[] = [];
  index: number = 0;
  totalQuestions: number = 0;
  points: number = 0;

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
     
  }

  getQuestions() {
    this.questionSubscription = this.questionService.getTenRandomQuestions()
    .subscribe({
      next: (res) => {
        this.questions = res;
        this.totalQuestions = res.length;
        console.log(this.questions)
      }
    })
  }

  updatePoints(earnedPoints: number) {
    this.points = earnedPoints
    }

  updateIndex(indexValue: number) {
    this.index = indexValue
  }

  ngOnDestroy(): void {
      if(this.questionSubscription) {
        this.questionSubscription.unsubscribe()
      }
  }

}
