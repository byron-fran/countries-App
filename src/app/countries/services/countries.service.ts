import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, pipe, tap } from 'rxjs';
import { Country } from '../interfaces/CountryResponse';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http : HttpClient) { }

  public getAllCountries () : Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.api_url}/all`)
    .pipe(
      map( countries => countries)
    )
  };

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([])),
        
      )

  };

  public searchCountryByName (name : string) : Observable<Country[]>  {
    return this.getCountriesRequest(`${environment.api_url}/name/${name}`)
      .pipe(
        tap(countries => countries)
      )
  };


  public getCountryByCode(code : string) : Observable<Country | undefined> {
    return this.http.get<Country[]>(`${environment.api_url}/alpha/${code}`)
      .pipe(
        map(country => country.length > 0 ? country[0] : undefined),
        catchError(() => of(undefined))
    
      )
  };

  public getCountriesByRegion (region : string) : Observable<Country[]> {
    return this.getCountriesRequest(`${environment.api_url}/region/${region}`)
    .pipe(
      tap(countries => countries)
    )
  };

}
