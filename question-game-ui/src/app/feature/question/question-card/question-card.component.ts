import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionResponseData } from 'src/app/core/services/question.service';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent {


  isSelected: boolean = false;
  isAlreadyClicked: boolean = false;
  @Input() question!: QuestionResponseData;
  @Input() index!: number;
  @Input() totalQuestions!: number;
  @Input() points!: number;
  @Input() seconds!:number;
  @Input() minutes!:number;
  @Output() pointsEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output() indexEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output() saveResultEmitter: EventEmitter<number> = new EventEmitter<number>()
  
  

  checkAnswer(userAnswer: string) {
    this.isSelected = true;
    if(userAnswer === this.question.correctAnswer && !this.isAlreadyClicked) {
      this.points += 10;
      this.pointsEmitter.next(this.points)
      this.isAlreadyClicked = true;
    }
    else if(userAnswer !== this.question.correctAnswer && !this.isAlreadyClicked) {
      this.isAlreadyClicked = true;
    }
    }

    nextQuestion() {
      if(this.index < this.totalQuestions - 1) {
        this.index++;
        this.indexEmitter.next(this.index)
        this.isSelected = false;
        this.isAlreadyClicked = false;
      }
    }

    onSaveResult() {
      this.saveResultEmitter.next(this.points)
    }

    addZeroMinutesIfLessThanTen(): string {
     return this.minutes < 10 ? "0" : ""
    }

    addZeroSecondsIfLessThanTen(): string {
      return this.seconds < 10 ? "0" : ""
     }

}
