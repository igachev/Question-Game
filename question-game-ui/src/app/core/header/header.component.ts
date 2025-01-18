import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from 'src/app/feature/auth/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

   isAuthenticated: boolean = false;
   isAdmin: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

  this.authService.userObject.subscribe((res) => {
    this.isAuthenticated = res.token ? true : false
  }) 

  this.authService.userObject.subscribe((res) => {
    this.isAdmin = res.email === 'admin@abv.bg' ? true : false
  })
   
  }

  onLogout(): void {
    this.authService.userObject.next(new User("","",new Date()))
    localStorage.removeItem("userData")
    this.router.navigate(['/'])
  }

}
