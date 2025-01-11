import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnswerInputComponent } from '../answer-input/answer-input.component';
import { QuestionRequestData, QuestionService } from 'src/app/core/services/question.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnDestroy {

  numOfPossibleAnswers = [1,2,3,4]
  selectedOption:string = ""
  answers: string[] = []
  @ViewChild(AnswerInputComponent) answerInputComponent!:AnswerInputComponent
  createQuestionSubscription!: Subscription
  listOfErrors: string[] = []

  constructor(
    private questionService: QuestionService
  ) { }

  onCreateQuestion(form: NgForm) {
    const {question,correctAnswer} = form.value
    this.answers = this.answers.filter((answer) => answer !== "")
    const questionRequestData: QuestionRequestData = {question,answers:this.answers,correctAnswer}

    this.createQuestionSubscription = this.questionService.createQuestion(questionRequestData)
    .subscribe({
      next: (res) => {

      },
      error: (err) => {
        this.listOfErrors = err
      }
    });
    
    form.reset()
    this.selectedOption = ""
    this.answerInputComponent.resetAnswers()
    }

    getAnswers(receivedAnswers: string[]) {
      this.answers = receivedAnswers
      }

    ngOnDestroy(): void {
        if(this.createQuestionSubscription) {
          this.createQuestionSubscription.unsubscribe()
        }
    }
  
}
