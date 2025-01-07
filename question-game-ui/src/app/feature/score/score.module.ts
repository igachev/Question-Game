import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreRoutingModule } from './score-routing.module';
import { UserScoresComponent } from './user-scores/user-scores.component';


@NgModule({
  declarations: [
    UserScoresComponent
  ],
  imports: [
    CommonModule,
    ScoreRoutingModule
  ]
})
export class ScoreModule { }
