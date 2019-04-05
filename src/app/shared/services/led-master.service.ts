import { Injectable } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LedMasterService {
  headers: Headers;

  constructor(public http: HttpClient) {

  }
   public saveData(data): Observable<any> {
    const url = `${environment.API_ENDPOINT}led/create/`;
    return this.http.post(url, data).pipe(map(response => {
      return response;
    }));
  //  return environment.APIEnd.put(data).url
  // }
 // let  url: 'http://localhost:8000/led/create';

  }
//   public getData(data): Observable<any> {
//     const url = `${environment.API_ENDPOINT}led/findall/`;
//     return this.http.get(url, data).pipe(map(response => {
//       return response;
//     }));
//   //  return environment.APIEnd.put(data).url
//   // }
//  // let  url: 'http://localhost:8000/led/create';

//   }

}
