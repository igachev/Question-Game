import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'auth',loadChildren:() => import("./feature/auth/auth.module").then((m) => m.AuthModule)},
  {path:'questions',loadChildren:() => import("./feature/question/question.module").then((m) => m.QuestionModule)},
  {path:'score',loadChildren:() => import("./feature/score/score.module").then((m) => m.ScoreModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
