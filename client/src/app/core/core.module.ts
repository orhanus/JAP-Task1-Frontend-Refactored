import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { ErrorInterceptor } from './interceptors/error.interceptor';
import { ShowsService } from './services/shows.service';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



export const interceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    interceptorProviders,
    ShowsService
  ],
  exports: []
})
export class CoreModule { }
