import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {
  isLoading$ = this.spinnerService.isLoading
  constructor(
    private spinnerService: SpinnerService
  ) {

  }

  

}
