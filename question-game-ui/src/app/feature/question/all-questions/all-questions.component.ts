import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuestionResponseData, QuestionService } from 'src/app/core/services/question.service';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.scss']
})
export class AllQuestionsComponent implements OnInit,OnDestroy {

  allQuestions: QuestionResponseData[] = []
  allQuestionsSubscription!: Subscription

  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
      this.getAllQuestions()
  }

  getAllQuestions() {
    this.allQuestionsSubscription = this.questionService.getAllQuestions()
    .subscribe({
      next: (res) => {
        this.allQuestions = res;
      }
    })
  }

  showQuestionDetails(id: number) {
    this.router.navigate([`/questions/${id}`])
  }

  ngOnDestroy(): void {
      if(this.allQuestionsSubscription) {
        this.allQuestionsSubscription.unsubscribe()
      }
  }



}
