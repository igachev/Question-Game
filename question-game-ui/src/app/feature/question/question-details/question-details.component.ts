import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuestionResponseData, QuestionService } from 'src/app/core/services/question.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss']
})
export class QuestionDetailsComponent implements OnInit,OnDestroy {

  question!: QuestionResponseData
  questionSubscription!: Subscription

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private activatedRoute:ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.getQuestion()
  }

  getQuestion() {
    const questionId = this.activatedRoute.snapshot.params['id']
    this.questionSubscription = this.questionService.getQuestion(questionId)
    .subscribe({
      next: (res) => {
        this.question = res
      }
    })
  }

  ngOnDestroy(): void {
      if(this.questionSubscription) {
        this.questionSubscription.unsubscribe()
      }
  }

}
