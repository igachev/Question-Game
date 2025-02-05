import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class LoadingSpinnerInterceptor implements HttpInterceptor {

  constructor(
    private spinnerService: SpinnerService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerService.setIsLoading = true
    return next.handle(request).pipe(
      finalize(() => {
        this.spinnerService.setIsLoading = false
      })
    );

  }
}
