import { Injectable } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PressureSensorService {

  constructor(public http: HttpClient) {
   }
   public saveData(data): Observable<any> {
    const url = `${environment.API_ENDPOINT}tempsensor/create/`;
    return this.http.post(url, data).pipe(map(response => {
      return response;
    }));
}
public getData(): Observable<any> {
  const url = `${environment.API_ENDPOINT}tempsensor/findall`;
  return this.http.get(url).pipe(map(response => {
    return response;
  }));
}
public updateSensor(data): Observable<any> {
  console.log('data' + data);
  const url = `${environment.API_ENDPOINT}tempsensor/update`;
  return this.http.put(url, data).pipe(map(response => {
   return response;
  }));
}
public deleteData(data): Observable<any> {
  const url = `${environment.API_ENDPOINT}tempsensor/delete/?id=${data.id}&deleted=true`;
  return this.http.delete(url).pipe(map(response => {
    return response;
  }));
}
}
