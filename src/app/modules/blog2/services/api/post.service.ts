import { Injectable } from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable, pipe} from 'rxjs';
import { Post } from '../../models/post';

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

  get(id:any) {
    console.log('getpostById');
    console.log(id);
    return this.http.get<any>(`${environment.apiUrl}api/post/${id}`);
  }

  create(post: any) {
    const params = new FormData();
    Object.keys(post).forEach(key => {
      const value = post[key];

      if (key === 'img') {
        const images = value as FileList;
        for (let i = 0; i < images.length; i++) {
          const file = new File([images[i]], images[i].name);
          params.append('img[]', file);
        }
      } else {
        params.append(key, value);
      }
    });
    return this.http.post<any>(`${environment.apiUrl}api/post`, params);
  }

  // update(id:number, post: any) {
  //   let params = new HttpParams();
  //   Object.keys(post).forEach(key => {
  //     params = params.append(key, post[key]);
  //   });
  //   return this.http.put<any>(`${environment.apiUrl}api/post/${id}`, post, { params } );
  // }
  //

  update(id: number, post: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'form-data',
      }),
    };
    const formData = new FormData();
    formData.append('_method', 'PUT');
    Object.keys(post).forEach(key => {
      const value = post[key];

      if (key === 'img') {
        if (value instanceof FileList) {
          const images = value as FileList;
          for (let i = 0; i < images.length; i++) {
            const file = images[i];
            formData.append('img[]', file);
          }
        }
      } else {
        formData.append(key, value);
      }
    });

    return this.http.post<any>(`${environment.apiUrl}api/post/${id}`, formData);
  }


  delete(id:any) {
    console.log('destroypost');
    return this.http.delete<any>(`${environment.apiUrl}api/post/${id}`, { params: id });
  }

  getAllRoles() {
    return this.http.get<any>(`${environment.apiUrl}api/role`, {  });
  }
}
