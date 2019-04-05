import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request ,RequestOptions ,RequestMethod } from '@angular/http';
import { Observable } from "rxjs";

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TempsensorService {

  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  findalltempsensormaster(){
    const GET_SENSOR = "tempsensor/findall";
    const current_url = "http://localhost:8000/";
    return this.http.get(current_url+GET_SENSOR,this.options )
      .pipe(map((response: any) => response.json()));

  }

  findallsensorname(sensorname) {
  const GET_LED = "temphistory/findallsensorname";
  const current_url = "http://localhost:8000/";
  const CHECK="?tempname="+sensorname;
  return this.http.get(current_url+GET_LED+CHECK,this.options )
    .pipe(map((response: any) => response.json()));
  }

}
