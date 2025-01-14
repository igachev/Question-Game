import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface QuestionResponseData {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
  creatorId: string;
}

export interface QuestionRequestData {
  question: string;
  answers: string[];
  correctAnswer: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getTenRandomQuestions() {
    return this.http.get<QuestionResponseData[]>("http://localhost:8080/questions")
  }

  createQuestion(questionRequestData: QuestionRequestData) {
    return this.http.post<QuestionResponseData>("http://localhost:8080/questions/create",questionRequestData)
    .pipe(
          catchError((err) => {
            let errors: string[] = []
            if(!err.error || !err.error.errorList) {
              errors.push("An error occured")
             return throwError(errors)
            }
            else {
              errors = err.error.errorList
              return throwError(errors)
            }
          })
        )
  }

  getAllQuestions() {
    return this.http.get<QuestionResponseData[]>("http://localhost:8080/questions/all/admin")
  }

}
