import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionGamePageComponent } from './question-game-page/question-game-page.component';

const routes: Routes = [
  {path:'',component:QuestionGamePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
