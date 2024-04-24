import { Component, Input, OnInit, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/CountryResponse';

@Component({
  selector: 'related-countries',
  templateUrl: './related-countries.component.html',

})
export class RelatedCountriesComponent implements OnInit {

  @Input()
  public region ? : string;

  @Input()
  public country? : Country

  public responsiveOptions: any[] | undefined;
  public countriesByRegion : Country [] = [];
  private  countriesServices = inject(CountriesService);

  searchCountriesByRegion (){
    if( !this.region) return;

    return this.countriesServices.getCountriesByRegion(this.region)
      .subscribe(countries => {
        this.countriesByRegion = countries.filter(_country => _country.cca3 !== this.country?.cca3)
      
      })
  };

  ngOnInit(): void {
    this.searchCountriesByRegion()
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 6,
          numScroll: 6
      },
      {
          breakpoint: '991px',
          numVisible: 4,
          numScroll: 4
      },
      {
          breakpoint: '767px',
          numVisible: 2,
          numScroll: 2
      }
  ];
  }

}
