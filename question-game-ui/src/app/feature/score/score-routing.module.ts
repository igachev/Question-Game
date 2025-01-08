import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserScoresComponent } from './user-scores/user-scores.component';
import { AllUsersScoresComponent } from './all-users-scores/all-users-scores.component';

const routes: Routes = [
  {path: 'user-scores',component:UserScoresComponent},
  {path: 'all-users-scores',component:AllUsersScoresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoreRoutingModule { }
