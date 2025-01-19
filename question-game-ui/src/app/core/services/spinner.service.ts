import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  spinnerSubject = new BehaviorSubject<boolean>(false)
  private _isLoading$!: Observable<boolean>

  constructor() { 
    this._isLoading$ = this.spinnerSubject.asObservable();
  }

 set setIsLoading(loading: boolean) {
  this.spinnerSubject.next(loading)
 }

 get isLoading(): Observable<boolean> {
  return this._isLoading$
 }

}
