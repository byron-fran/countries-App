import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/CountryResponse';

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',

})
export class CountriesPageComponent implements OnInit {

  constructor(private countriesServices : CountriesService){}
  public countries : Country [] = [];

  ngOnInit(): void {
    this.countriesServices.getAllCountries()
    .subscribe(countries => this.countries = countries)
  }

}
