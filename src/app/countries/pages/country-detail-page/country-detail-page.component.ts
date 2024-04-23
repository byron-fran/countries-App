import { Component, Input, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/CountryResponse';

@Component({
  selector: 'app-country-detail-page',
  templateUrl: './country-detail-page.component.html',

})
export class CountryDetailPageComponent {
  
  private activateRoute = inject(ActivatedRoute);
  private route = inject(Router)
  private countriesServices = inject(CountriesService)

  @Input()
  public country?: Country;

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(params => this.countriesServices.getCountryByCode(params['id']))

      )
      .subscribe(country => {
        if (!country) return this.route.navigateByUrl('/countries')
        this.country = country
        return
      })
  }
}
