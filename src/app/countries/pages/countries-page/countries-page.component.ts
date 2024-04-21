import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { CountriesService } from '../../services/countries.service';
@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',

})
export class CountriesPageComponent implements OnInit {
  constructor(private countriesServices : CountriesService){}

  ngOnInit(): void {
    
  }
}
