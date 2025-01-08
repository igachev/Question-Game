import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScoreResponseData, ScoreService } from 'src/app/core/services/score.service';

@Component({
  selector: 'app-user-scores',
  templateUrl: './user-scores.component.html',
  styleUrls: ['./user-scores.component.scss']
})
export class UserScoresComponent implements OnInit,OnDestroy {

  userScores:ScoreResponseData[] = []
  userScoresSubscription!: Subscription

  constructor(
    private scoreService: ScoreService
  ) {

  }

  ngOnInit(): void {
      this.userScoresSubscription = this.scoreService.getUserScores()
      .subscribe({
        next: (data) => {
          this.userScores = data
        },
        error: (err) => {
          console.log(err)
        }
      })
  };

  ngOnDestroy(): void {
      if(this.userScoresSubscription) {
        this.userScoresSubscription.unsubscribe()
      }
  }

}
