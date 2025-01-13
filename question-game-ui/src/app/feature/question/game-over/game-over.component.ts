import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent {

  @Output() resetGameEmitter:EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(
    private router: Router
  ) { }

  goToHomePage() {
    this.router.navigate(['/'])
  }

  tryAgain() {
    this.resetGameEmitter.next(false)

  }

}
