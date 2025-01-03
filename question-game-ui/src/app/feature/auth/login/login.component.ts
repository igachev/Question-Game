import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService, LoginRequestData } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  private loginSubscription!: Subscription
  listOfErrors: string[] = []

  constructor(
    private authService:AuthService,
    private router:Router
  ) {

  }

onLogin(form: NgForm) {
const {email,password} = form.value
const loginRequestData:LoginRequestData = {email,password}
this.loginSubscription = this.authService.login(loginRequestData)
.subscribe({
  next: (res) => {
    console.log(res)
    this.router.navigate(['/'])
  },
  error: (err) => {
    console.log(err)
    this.listOfErrors = err
  }
})
}

ngOnDestroy(): void {
    if(this.loginSubscription) {
      this.loginSubscription.unsubscribe()
    }
}

}
