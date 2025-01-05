import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() pointsEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output() indexEmitter: EventEmitter<number> = new EventEmitter<number>();

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
      this.index++;
      this.indexEmitter.next(this.index)
      this.isSelected = false;
      this.isAlreadyClicked = false;
    }

}
