import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-answer-input',
  templateUrl: './answer-input.component.html',
  styleUrls: ['./answer-input.component.scss']
})
export class AnswerInputComponent implements OnChanges {

  @Input() selectedOption!: string;
  @Output() answersEmitter:EventEmitter<string[]>= new EventEmitter()
  currentNumOfInputs = 0;
  inputAttributes: string[] = ['answer-1','answer-2','answer-3','answer-4']
  answers: string[] = ['','','','']
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['selectedOption']) {
        this.currentNumOfInputs = Number(changes['selectedOption'].currentValue);
    }
  }

  resetAnswers(): void {
    // Reset the answers array
    this.answers = ['', '', '', ''];
    this.answersEmitter.next(this.answers);
  }

}
