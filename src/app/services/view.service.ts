import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(public http: HttpClient) {

  }
  public getData(): Observable<any> {
    const url = `${environment.API_ENDPOINT}led/findall/`;
    return this.http.get(url).pipe(map(response => {
      return response;
    }));
  }
  public deleteData(): Observable<any> {
    const url = `${environment.API_ENDPOINT}/led/delete/`;
    return this.http.delete(url).pipe(map(response => {
      return response;
    }));
  }
}
