import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreRoutingModule } from './score-routing.module';
import { UserScoresComponent } from './user-scores/user-scores.component';
import { AllUsersScoresComponent } from './all-users-scores/all-users-scores.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UserScoresComponent,
    AllUsersScoresComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ScoreRoutingModule
  ]
})
export class ScoreModule { }
