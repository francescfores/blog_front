import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import { User } from '../../models/user';
import {Router} from '@angular/router';
import {SocialAuthService} from "@abacritt/angularx-social-login";
import {Category} from "../../models/category";

@Injectable({ providedIn: 'root' })
export class AuthenticationAdminService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public user:User;

  constructor(private http: HttpClient, private router: Router,  private socialAuthService: SocialAuthService
  ) {
    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User>(storedUser !== null ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
    this.user= new User();
  }

  public get currentUserValue(): any  {
    return this.currentUserSubject.value;
  }

  login(email:string, password:string) {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    // headers.append('Access-Control-Allow-Headers','X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    const httpOptions = {
      headers,
    };
    return this.http.post<any>(`${environment.apiUrl}api/login_User`, { email, password }, httpOptions)
      // return this.http.post<any>(`$/users/authenticate`, { username, password })
      .pipe(map(data => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.user = data.User;
        this.user.token = data.token;
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        const cartJson = localStorage.getItem('cart');
        console.log('cartJson',cartJson);
        this.currentUserSubject.next(this.user);
        return this.user;
      }));
  }
  loginUser(email:string, password:string) {
    console.log(email);
    console.log(password);
    console.log('cors');
    console.log(environment.apiUrl);
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Headers','X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    headers.append('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    headers.append('Allow','GET, POST, OPTIONS, PUT, DELETE');
    const httpOptions = {
      headers,
    };
    return this.http.post<any>(`${environment.apiUrl}api/auth/login`, { email, password }, httpOptions)
      // return this.http.post<any>(`$/users/authenticate`, { username, password })
      .pipe(map(data => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        console.log('login');
        this.user = data.user;
        this.user.token = data.token;
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        this.currentUserSubject.next(this.user);
        return this.user;
      }));
  }
  loginGoogle(email:string, id_token:string) {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Headers','X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    headers.append('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    headers.append('Allow','GET, POST, OPTIONS, PUT, DELETE');
    const httpOptions = {
      headers,
    };
    return this.http.post<any>(`${environment.apiUrl}api/login_User_google`, { email, id_token }, httpOptions)
      // return this.http.post<any>(`$/users/authenticate`, { username, password })
      .pipe(map(data => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        console.log('login');
        this.user = data.User;
        this.user.token = data.token;
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        this.currentUserSubject.next(this.user);
        return this.user;
      }));
  }
  logout() {
    console.log('logout');
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    localStorage.removeItem('cart');
    localStorage.clear();
    // if ( this.currentUserSubject.value.businesses.length > 0 ) {
    //   localStorage.removeItem('business');
    //   console.log('removeItem');
    //
    // }
    this.currentUserSubject.next(new User());
    this.socialAuthService.signOut();
    this.router.navigate(['/auth/login'], { queryParams: { returnUrl: '' }});
  }

  checkRoles(expectedRoles: string[]): boolean {
    let isAuthorized = false;
    const userRoles = this.getRoles();

    // Itera sobre los roles esperados y comprueba si el usuario tiene alguno de ellos
    expectedRoles.forEach(role => {
      if (userRoles.indexOf(role) > -1) {
        isAuthorized = true;
      }
    });

    return isAuthorized;
  }

  getRoles(): string[] {
    // Obtiene los roles del usuario desde el objeto currentUserValue
    const userRoles = this.currentUserValue.roles;
    return userRoles ? userRoles.map((role: { name: string }) => role.name) : [];  }

  register(data: any) {
    const params = new FormData();
    Object.keys(data).forEach(key => {
        params.append(key, data[key]);
    });
    console.log('params');
    console.log(params);
    return this.http.post<any>(`${environment.apiUrl}api/register_User`,  params );
  }
}
