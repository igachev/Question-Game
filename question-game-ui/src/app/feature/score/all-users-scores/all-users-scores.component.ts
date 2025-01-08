import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScoreResponseData, ScoreService } from 'src/app/core/services/score.service';

@Component({
  selector: 'app-all-users-scores',
  templateUrl: './all-users-scores.component.html',
  styleUrls: ['./all-users-scores.component.scss']
})
export class AllUsersScoresComponent implements OnInit,OnDestroy {

 allUsersScores:ScoreResponseData[] = []
 allUsersScoresSubscription!: Subscription

  constructor(
    private scoreService: ScoreService
  ) { }

ngOnInit(): void {
    this.allUsersScoresSubscription = this.scoreService.getAllUsersScores()
    .subscribe({
      next: (data) => {
        this.allUsersScores = data
      },
      error: (err) => {
        console.log(err)
      }
    })
}

ngOnDestroy(): void {
    if(this.allUsersScoresSubscription) {
      this.allUsersScoresSubscription.unsubscribe()
    }
}

}
