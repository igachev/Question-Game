import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionGamePageComponent } from './question-game-page/question-game-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuestionCardComponent } from './question-card/question-card.component';


@NgModule({
  declarations: [
    QuestionGamePageComponent,
    QuestionCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    QuestionRoutingModule
  ]
})
export class QuestionModule { }
