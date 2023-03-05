import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataGetService {

  constructor(private _http: HttpClient) { }

  getCountryData() {
    return this._http.get<any>('https://restcountries.com/v3.1/all')
  }

}
