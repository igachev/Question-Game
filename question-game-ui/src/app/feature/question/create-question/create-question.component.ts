import { Component, OnChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnswerInputComponent } from '../answer-input/answer-input.component';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent {

  numOfPossibleAnswers = [1,2,3,4]
  selectedOption:string = ""
  answers: string[] = []
  @ViewChild(AnswerInputComponent) answerInputComponent!:AnswerInputComponent

  onCreateQuestion(form: NgForm) {
    console.log(form)
    console.log(this.answers)
    form.reset()
    this.selectedOption = ""
    this.answerInputComponent.resetAnswers()
    }

    getAnswers(receivedAnswers: string[]) {
      this.answers = receivedAnswers
      }
  
}
