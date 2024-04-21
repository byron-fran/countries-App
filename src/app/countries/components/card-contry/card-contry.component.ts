import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/CountryResponse';

@Component({
  selector: 'card-contry',
  templateUrl: './card-contry.component.html',

})
export class CardContryComponent {
  @Input()
  public country? : Country;

}
