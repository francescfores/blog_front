import { Injectable } from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable, pipe} from 'rxjs';
import { Post } from '../../models/post';

@Injectable({
  providedIn: 'root'
})

export class PostContentService {

  constructor(private http: HttpClient) {
  }
  getAll() {
    return this.http.get<any>(`${environment.apiUrl}api/post_content`, {  });
  }

  //todo create service content-type
  getAllTypes() {
    return this.http.get<any>(`${environment.apiUrl}api/post_content_type`, {  });
  }


  paginated(page:string) {
    return this.http.get<any>(`${environment.apiUrl}api/post_content_paginated?page=`+page, {  });
  }

  paginatedByPost(page:string, id:number) {
    return this.http.get<any>(`${environment.apiUrl}api/post/${id}/post_content_paginated?page=`+page, {  });
  }

  get(id:any) {
    console.log('getpostById');
    console.log(id);
    return this.http.get<any>(`${environment.apiUrl}api/post_content/${id}`);
  }

  create(post: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
      }),
    };
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
    return this.http.post<any>(`${environment.apiUrl}api/post_content`, params);
  }

  update(id: number, post: any, typeAttributes:any, attributes:any, subcontents:any) {
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
    Object.keys(typeAttributes).forEach(key => {
      const value = typeAttributes[key];
        formData.append('type_attrs_'+key, value);
    });
    Object.keys(attributes).forEach(key => {
      const value = attributes[key];
      formData.append(key, value);
    });
    Object.keys(subcontents).forEach(key => {
      const value = subcontents[key];
      formData.append(key, value);
    });
    return this.http.post<any>(`${environment.apiUrl}api/post_content/${id}`, formData);
  }

  delete(id:any) {
    console.log('destroypost');
    return this.http.delete<any>(`${environment.apiUrl}api/post_content/${id}`, { params: id });
  }
}
