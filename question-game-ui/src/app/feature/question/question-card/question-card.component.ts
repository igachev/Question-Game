import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionResponseData } from 'src/app/core/services/question.service';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent {



  @Input() question!: QuestionResponseData;
  @Input() index!: number;
  @Input() totalQuestions!: number;
  @Input() points!: number;
  @Output() pointsEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output() indexEmitter: EventEmitter<number> = new EventEmitter<number>();

  checkAnswer(userAnswer: string) {
    if(userAnswer === this.question.correctAnswer) {
      this.points += 10;
      this.pointsEmitter.next(this.points)
    }
    }

    nextQuestion() {
      this.index++;
      this.indexEmitter.next(this.index)
    }

}
