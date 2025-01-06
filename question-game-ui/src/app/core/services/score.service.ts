import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export interface ScoreRequestData {
  points: number;
}

export interface ScoreResponseData {
  points: number;
  playedAt: Date;
  playerEmail: string;
}

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  saveScore(scoreRequestData: ScoreRequestData) {
   return this.http.post<ScoreResponseData>("http://localhost:8080/score/add",scoreRequestData)
   .pipe(
    catchError((err) => {
     let errors:string[] = [];
     if(!err.error || !err.error.errorList) {
      errors.push("An error occurred")
      return throwError(errors)
     }
     else {
      errors = err.error.errorList
      return throwError(errors)
     }
    })
   )
  }

}
