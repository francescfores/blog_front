import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {first, map} from 'rxjs/operators';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable, pipe} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  constructor(private http: HttpClient) {
  }
  paginated( pr:any, entity:any) {
    Number(entity.current_page)
    if(pr==='Previous'){
      pr = Number(entity.current_page)
      if(pr === entity.current_page){
        pr = Number(entity.current_page)
      }else{
        pr--;
      }
    }else if(pr==='Next'){
      pr = Number(entity.current_page)
      if(pr === entity.last_page){
        pr = Number(entity.current_page)
      }else{
        pr++;
      }
    }
    return pr;
  }

}
