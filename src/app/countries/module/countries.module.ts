import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRouting } from './countries-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {CardModule} from 'primeng/card'
import { CardContryComponent } from '../components/card-contry/card-contry.component';
import { CountriesPageComponent } from '../pages/countries-page/countries-page.component';
import { ImageModule } from 'primeng/image';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { CountryDetailPageComponent } from '../pages/country-detail-page/country-detail-page.component';
import { ChipModule } from 'primeng/chip';

@NgModule({
  declarations: [CardContryComponent, CountriesPageComponent,SearchBarComponent, CountryDetailPageComponent],
  imports: [
    CommonModule,
    CountriesRouting,
    CardModule,
    ImageModule,
    ChipModule
  
  ]
})
export class CountriesModule { }
