import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from 'src/app/feature/auth/user.model';


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

export interface LoginResponseData {
  token: string;
}

export interface LoginRequestData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   userObject = new BehaviorSubject<User>(new User('','',new Date()))
   private timeout: any;

  constructor(
    private http: HttpClient,
    private router: Router
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

  login(loginRequestData:LoginRequestData) {
    return this.http.post<LoginResponseData>("http://localhost:8080/auth/login",loginRequestData)
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
      }),
      tap((res) => {
        const expireDate = new Date(new Date().getTime() + 60000 * 2);
        const user = new User(loginRequestData.email,res.token,expireDate)
        localStorage.setItem("userData",JSON.stringify(user))
        const expirationDate = expireDate.getTime()
        const currentDate = new Date().getTime()
        const differenceInDates = expirationDate - currentDate;
        this.userObject.next(user)
        this.autoLogout(differenceInDates)
        
      })
    )
  }

  autoLogin() {
    if(localStorage.getItem("userData")) {
      let userDataString = localStorage.getItem("userData")
      if(userDataString) {
        let userData = JSON.parse(userDataString)
        let user = new User(userData.email,userData._token,new Date(userData.expireDate))
        this.userObject.next(user)
        const expirationDate = new Date(userData.expireDate).getTime()
        const currentDate = new Date().getTime()
        const differenceInDates = expirationDate - currentDate;
        console.log(differenceInDates)
        this.autoLogout(differenceInDates)
        
      }
    }
    else {
      return;
    }
  }

  autoLogout(differenceInDates: number) {
    if(this.timeout) {
      clearTimeout(this.timeout)
    }
      this.timeout = setTimeout(() => {
      const user = new User('','',new Date())
      this.userObject.next(user)
      localStorage.removeItem("userData")
      this.router.navigate(["/"])
    }, differenceInDates);
  }

}
