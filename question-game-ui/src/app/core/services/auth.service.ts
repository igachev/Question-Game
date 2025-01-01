import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';


export interface RegisterResponseData {
  email: string;
  firstName: string;
  lastName: string;
}

export interface RegisterRequestData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { 

  }

  register(registerRequestData: RegisterRequestData) {
    return this.http.post<RegisterResponseData>("http://localhost:8080/auth/register",
      registerRequestData
    )
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

}
