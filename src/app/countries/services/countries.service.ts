import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, pipe } from 'rxjs';
import { Country } from '../interfaces/CountryResponse';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  
  constructor(private http : HttpClient) { }


  getAllCountries () : Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.api_url}/all`)
    .pipe(
      map( countries => countries)
    )
  }

}
