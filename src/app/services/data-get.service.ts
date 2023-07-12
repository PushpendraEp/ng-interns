import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataGetService {

  constructor(private _http: HttpClient) { }

  getCountryData() {
    return this._http.get<any>('https://restcountries.com/v3.1/all')
  }

  getCountryList() {
    let url = 'https://geodata.phplift.net/api/index.php',
        queryParams = 'type=getCountries'; 
    return this._http.post<any>(`${url}?${queryParams}`, null);
  }

  getStateList(countryId: string | number) {
    let url = 'https://geodata.phplift.net/api/index.php',
        queryParams = 'type=getStates&countryId=' + countryId; 
    return this._http.post<any>(`${url}?${queryParams}`, null);
  }
 
  getCityList(stateId: string | number) {
    let url = 'https://geodata.phplift.net/api/index.php',
        queryParams = 'type=getCities&countryId=&stateId=' + stateId; 
    return this._http.post<any>(`${url}?${queryParams}`, null);
  }

}
