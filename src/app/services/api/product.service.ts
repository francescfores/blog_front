import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable, pipe} from 'rxjs';
import { Post } from '../../models/product';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) {
  }
  getAll() {
    return this.http.get<any>(`${environment.apiUrl}api/post`, {  });
  }

  paginated(page:string) {
    return this.http.get<any>(`${environment.apiUrl}api/post_paginated?page=`+page, {  });
  }

  get(id:number) {
    console.log('getpostById');
    return this.http.get<any>(`${environment.apiUrl}api/post/${id}`, { params: id });
  }

  create(post: Post) {
    console.log('createpost');
    let params = new HttpParams();
    Object.keys(post).forEach(key => {
      params = params.append(key, post[key]);
    });
    return this.http.post<any>(`${environment.apiUrl}api/post`, params);
  }

  update(id:number, post: Post) {
    let params = new HttpParams();
    Object.keys(post).forEach(key => {
      params = params.append(key, post[key]);
    });
    return this.http.put<any>(`${environment.apiUrl}api/post/${id}`, post, { params } );
  }

  delete(id:number) {
    console.log('destroypost');
    return this.http.delete<any>(`${environment.apiUrl}api/post/${id}`, { params: id });
  }

  getAllRoles() {
    return this.http.get<any>(`${environment.apiUrl}api/role`, {  });
  }
}
