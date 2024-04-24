import { Component, Input, OnInit, inject } from '@angular/core';
import { Country } from '../../interfaces/CountryResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'card-contry',
  templateUrl: './card-contry.component.html',

})
export class CardContryComponent  {
  @Input()
  public country?: Country;


}
