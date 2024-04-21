import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRouting } from './countries-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {CardModule} from 'primeng/card'
import { CardContryComponent } from '../components/card-contry/card-contry.component';
import { CountriesPageComponent } from '../pages/countries-page/countries-page.component';
import { ImageModule } from 'primeng/image';
@NgModule({
  declarations: [CardContryComponent, CountriesPageComponent,],
  imports: [
    CommonModule,
    CountriesRouting,
    CardModule,
    ImageModule
    
  ]
})
export class CountriesModule { }
