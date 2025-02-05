import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionGamePageComponent } from './question-game-page/question-game-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuestionCardComponent } from './question-card/question-card.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { AnswerInputComponent } from './answer-input/answer-input.component';
import { RouterModule } from '@angular/router';
import { GameOverComponent } from './game-over/game-over.component';
import { AllQuestionsComponent } from './all-questions/all-questions.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';

@NgModule({
  declarations: [
    QuestionGamePageComponent,
    QuestionCardComponent,
    CreateQuestionComponent,
    AnswerInputComponent,
    GameOverComponent,
    AllQuestionsComponent,
    QuestionDetailsComponent,
    EditQuestionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    RouterModule,
    QuestionRoutingModule
  ]
})
export class QuestionModule { }
