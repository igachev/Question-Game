import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreRoutingModule } from './score-routing.module';
import { UserScoresComponent } from './user-scores/user-scores.component';
import { AllUsersScoresComponent } from './all-users-scores/all-users-scores.component';


@NgModule({
  declarations: [
    UserScoresComponent,
    AllUsersScoresComponent
  ],
  imports: [
    CommonModule,
    ScoreRoutingModule
  ]
})
export class ScoreModule { }
