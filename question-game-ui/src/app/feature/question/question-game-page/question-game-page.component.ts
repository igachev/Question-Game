import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuestionResponseData, QuestionService } from 'src/app/core/services/question.service';
import { ScoreRequestData, ScoreService } from 'src/app/core/services/score.service';

@Component({
  selector: 'app-question-game-page',
  templateUrl: './question-game-page.component.html',
  styleUrls: ['./question-game-page.component.scss']
})
export class QuestionGamePageComponent implements OnInit,OnDestroy {

  private questionSubscription!: Subscription;
  private addScoreSubscription!: Subscription;
  questions: QuestionResponseData[] = [];
  index: number = 0;
  totalQuestions: number = 0;
  points: number = 0;
  totalSeconds!: number;
  minutes!: number;
  seconds!: number;
  runningInterval: any

  constructor(
    private questionService: QuestionService,
    private scoreService: ScoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
     
  }

  getQuestions() {
    this.questionSubscription = this.questionService.getTenRandomQuestions()
    .subscribe({
      next: (res) => {

        if(this.runningInterval) {
          clearInterval(this.runningInterval)
        }

        this.questions = res;
        this.totalQuestions = res.length;
        console.log(this.questions)
        this.totalSeconds = 10 * 20;
        

        this.runningInterval = setInterval(() => { 
        this.minutes = Math.floor(this.totalSeconds / 60);
        this.seconds = this.totalSeconds % 60
          this.totalSeconds--
          console.log(this.seconds)
          if(this.totalSeconds === 0) {
            clearInterval(this.runningInterval)
          }
        }, 1000);

      }
    })
  }

  saveScore(points: number) {
    const scoreRequestData:ScoreRequestData = {points}
    this.addScoreSubscription = this.scoreService.saveScore(scoreRequestData)
    .subscribe({
      next: (res) => {
        this.router.navigate(['/'])
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
      if(this.addScoreSubscription) {
        this.addScoreSubscription.unsubscribe()
      }
      if(this.runningInterval) {
        clearInterval(this.runningInterval)
      }
  }

}
