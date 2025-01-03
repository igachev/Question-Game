import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from 'src/app/feature/auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

   isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
  this.authService.userObject.subscribe((res) => {
    this.isAuthenticated = res.token ? true : false
  })  
  }

  onLogout(): void {
    this.authService.userObject.next(new User("","",new Date()))
    localStorage.removeItem("userData")
  }

}
