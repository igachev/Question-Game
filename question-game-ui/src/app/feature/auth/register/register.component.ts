import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService, RegisterRequestData } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnDestroy {
  private registrationSubscription!: Subscription;
  listOfErrors: string[] = []

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  onRegister(form: NgForm) {
    const {email,password,firstName,lastName} = form.value
    const registerRequestData: RegisterRequestData = {email,password,firstName,lastName}
    this.registrationSubscription = this.authService.register(registerRequestData)
    .subscribe({
      next: (res) => {
        console.log(res)
        this.router.navigate(['/'])
      },
      error: (err) => {
        this.listOfErrors = err
      }
    })
  }

  ngOnDestroy(): void {
      if(this.registrationSubscription) {
        this.registrationSubscription.unsubscribe()
      }
  }
  
}
