import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {AuthenticationAdminService} from "../api/authentication-admin.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationAdminService: AuthenticationAdminService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        this.authenticationAdminService.logout();
        // location.reload(true);
      } else if (err.status === 500 && err.error.message ==='Token has expired') {

        console.log(err.error.message);
        console.log(err.error.message ==='Token has expired');
        this.authenticationAdminService.logout();
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
