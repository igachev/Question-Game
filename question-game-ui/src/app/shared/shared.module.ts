import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    ErrorComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
