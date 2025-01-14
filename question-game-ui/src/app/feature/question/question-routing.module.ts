import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionGamePageComponent } from './question-game-page/question-game-page.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { AllQuestionsComponent } from './all-questions/all-questions.component';

const routes: Routes = [
  {path:'',component:QuestionGamePageComponent},
  {path:'create',component:CreateQuestionComponent},
  {path:'all',component:AllQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
