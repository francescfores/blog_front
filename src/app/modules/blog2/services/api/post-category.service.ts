import { Injectable } from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable, pipe} from 'rxjs';
import { PostCategory } from '../../models/post-category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private http: HttpClient) {
  }
  getAll() {
    return this.http.get<any>(`${environment.apiUrl}api/post_category`, {  });
  }

  paginated(page:string) {
    return this.http.get<any>(`${environment.apiUrl}api/post_category_paginated?page=`+page, {  });
  }

  get(id:any) {
    console.log('getcategoryById');
    return this.http.get<any>(`${environment.apiUrl}api/post_category/${id}`, { params: id });
  }

  create(category: any) {
    const params = new FormData();
    Object.keys(category).forEach(key => {
      const value = category[key];

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
    return this.http.post<any>(`${environment.apiUrl}api/post_category`, params);
  }

  update(id:number, category: any) {
    let params = new HttpParams();
    Object.keys(category).forEach(key => {
      params = params.append(key, category[key]);
    });
    return this.http.put<any>(`${environment.apiUrl}api/post_category/${id}`, category, { params } );
  }

  delete(id:any) {
    console.log('destroycategory');
    return this.http.delete<any>(`${environment.apiUrl}api/post_category/${id}`, { params: id });
  }

  getAllRoles() {
    return this.http.get<any>(`${environment.apiUrl}api/role`, {  });
  }
}
