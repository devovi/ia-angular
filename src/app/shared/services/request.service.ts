import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request ,RequestOptions ,RequestMethod } from '@angular/http';
import { Observable } from "rxjs";

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  // public filterCard = [];
  headers: Headers;
  options: RequestOptions;

    constructor(private http: Http) {
      // console.log(this.filterCard);
      this.headers = new Headers({ 'Content-Type': 'application/json' });
      this.options = new RequestOptions({ headers: this.headers });
    }

    // dailyReport(){
    //   return this.http.get('https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=b1b15e88fa797225412429c1c50c122a1')
    //   .pipe(map((res:any)=> res.json()));
    // }
      public insert(url, data): Observable<any> {
        let body = data;
        return this.http.post(url, body, this.options)
        .pipe(map((response: any) => response.json()));

      }
      ////////////////////////////////
      getledctrl(ctrl){
        const GET_LED = "ledhistory/mqtt";
        const current_url = "http://localhost:8000/";
        const CHECK="?led="+ctrl;
        return this.http.get(current_url+GET_LED+CHECK,this.options )
          .pipe(map((response: any) => response.json()));
      }

      getallled() {
      const GET_LED = "ledhistory/findall";
      const current_url = "http://localhost:8000/";
      return this.http.get(current_url+GET_LED,this.options )
        .pipe(map((response: any) => response.json()));
      }

      getallledmaster() {
      const GET_LED = "led/findall";
      const current_url = "http://localhost:8000/";
      return this.http.get(current_url+GET_LED,this.options )
        .pipe(map((response: any) => response.json()));
      }

      getallledname(ledname) {
      const GET_LED = "ledhistory/findallledname";
      const current_url = "http://localhost:8000/";
      const CHECK="?ledname="+ledname;
      return this.http.get(current_url+GET_LED+CHECK,this.options )
        .pipe(map((response: any) => response.json()));
      }
      ////////////////////////////

      public update(url, data): Observable<any> {
        let body = data;
        return this.http.post(url, body, this.options)
        .pipe(map((response: any) => response.json()));
      }
      public selectAll(url): Observable<any>{
        return this.http.get(url).pipe(map((response: any) => response.json()));
      }
      // // //
      public selectWhere(url, data): Observable<any>{
        return this.http.get(url, {params:data})
          .pipe(map((response: any) => response.json()));
      }
      private handleError(error:any) {
          let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
          console.error(errMsg); // log to console instead
          return Observable.throw(errMsg);
        }
}
