import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable, switchMap, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    return this.authService.userObject.pipe(
      take(1),
      switchMap((user) => {
        
        if(!user.email) {
          return next.handle(request);
        }
        
        else {
          let modifiedRequest = request.clone({
            headers: new HttpHeaders({
              Authorization: `Bearer ${user.token}`
            })
          })
          return next.handle(modifiedRequest)
        }

      })
    );
    
  }
}
