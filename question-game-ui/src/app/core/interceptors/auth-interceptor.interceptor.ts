import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authService.userObject.pipe(
      switchMap((user) => {
        if(!user.email) {
          return next.handle(request);
        }
        else {
          let modifiedRequest = request.clone({
            params: request.params.append("Bearer ",user.token)
          })
          return next.handle(modifiedRequest)
        }
      })
    )
    
  }
}
