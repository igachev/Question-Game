import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserScoresComponent } from './user-scores/user-scores.component';

const routes: Routes = [
  {path: 'user-scores',component:UserScoresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoreRoutingModule { }
