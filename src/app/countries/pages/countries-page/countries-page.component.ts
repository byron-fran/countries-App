import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/CountryResponse';

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',

})
export class CountriesPageComponent implements OnInit {

  public termSearch : string = '';

  constructor(private countriesServices : CountriesService){}
  public countries : Country [] = [];

  ngOnInit(): void {
    this.Allcountries
  };

  get Allcountries () {
    return this.countriesServices.getAllCountries()
    .subscribe(countries => this.countries = countries)
  }

  onSearch(term : string){
    this.countriesServices.searchCountryByName(term)
    .subscribe(countries => this.countries = countries)
  }
  onResetCountries () {
    this.Allcountries

  };
  
}
