import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthInterceptorInterceptor } from './interceptors/auth-interceptor.interceptor';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
      {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorInterceptor,multi:true}
    ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
