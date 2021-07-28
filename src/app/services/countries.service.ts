import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  getCountries(){
    return this.http.get(`${environment.urlApi}/all`);
  }

  getCountryByName(countryName: string){
    return this.http.get(`${environment.urlApi}/name/${countryName}`);
  }

  getCountriesByRegion(region: string){
    return this.http.get(`${environment.urlApi}/region/${region}`);
  }
}
