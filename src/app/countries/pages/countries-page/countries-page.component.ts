import { Component, Input, OnInit, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/CountryResponse';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',

})
export class CountriesPageComponent implements OnInit {
  constructor(private countriesServices: CountriesService) { }

  //search term
  public termSearch: string = '';
  //Current page
  public p: number = 1;
  //List countries
  public countries: Country[] = [];
  //routes Injetables 
  public router = inject(ActivatedRoute);
  public route = inject(Router)


  ngOnInit(): void {
    // Get all countries
    this.Allcountries

    // Get query params from observable 
    this.router.queryParams.subscribe(params => {

      if (Number(params['page']) > 21) {

        this.route.navigateByUrl(`/countries?page=1`)
        return
      }
      this.p = Number(params['page'])

    })
  };


  get Allcountries() {
    return this.countriesServices.getAllCountries()
      .subscribe(countries => this.countries = countries)
  }

  // search by term from a input text
  onSearch(term: string) {
    this.countriesServices.searchCountryByName(term)
      .subscribe(countries => {
        this.countries = countries;
        // Reset current page
        this.p = 1;

      })
  };

  //reset and get all countries
  onResetCountries() {
    this.Allcountries

  };

}
