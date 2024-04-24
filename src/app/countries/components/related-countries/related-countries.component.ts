import { Component, Input, OnInit, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/CountryResponse';

@Component({
  selector: 'related-countries',
  templateUrl: './related-countries.component.html',
  styleUrl: './related-countries.component.scss'
})
export class RelatedCountriesComponent implements OnInit {

  @Input()
  public region ? : string;

  @Input()
  public country? : Country

  public countriesByRegion : Country [] = [];
  private  countriesServices = inject(CountriesService);

  searchCountriesByRegion (){
    if( !this.region) return;

    return this.countriesServices.getCountriesByRegion(this.region)
      .subscribe(countries => this.countriesByRegion = countries.filter(_country => _country.cca3 !== this.country?.cca3))
  };

  ngOnInit(): void {
    this.searchCountriesByRegion()
  }

}
