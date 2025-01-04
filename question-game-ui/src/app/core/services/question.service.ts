import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface QuestionResponseData {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
  creatorId: string;
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

}
