import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuestionResponseData, QuestionService } from 'src/app/core/services/question.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit,OnDestroy {

  question!: QuestionResponseData
  inputAttributes: string[] = ['answer-1','answer-2','answer-3','answer-4']
  editQuestionSubscription!: Subscription

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private activatedRoute:ActivatedRoute
  ) {

  }

  ngOnInit(): void {
      const questionId = this.activatedRoute.snapshot.params['id']
      this.questionService.getQuestion(questionId)
      .subscribe({
        next: (res) => {
          this.question = res
        }
      })
  }

  onEdit(form: NgForm) {
    const questionId = this.activatedRoute.snapshot.params['id']
    this.editQuestionSubscription = this.questionService.editQuestion(questionId,this.question)
    .subscribe({
      next:(res) => {
        this.router.navigate(['/questions/all'])
      },
      error: (err) => {
        console.log(err)
      }
    })
    }
/* 
  To prevent Angular from recreating DOM elements unnecessarily, use a trackBy function with *ngFor.
  The trackBy function helps Angular uniquely identify elements, so it doesn’t recreate them
  when their values change.
*/
    trackByFn(index: number, item: string): number {
      return index; // Use the index as a unique identifier
    }

    back() {
      this.router.navigate(["/questions/all"])
    }

    ngOnDestroy(): void {
        if(this.editQuestionSubscription) {
          this.editQuestionSubscription.unsubscribe()
        }
    }

}
