import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import {AuthenticationAdminService} from "../api/authentication-admin.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationAdminService: AuthenticationAdminService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = this.authenticationAdminService.currentUserValue;
    if (currentUser && currentUser.token) {
      console.log('add authorization header with jwt token if available');

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }
    return next.handle(request);
  }
}
