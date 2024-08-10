import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRouting } from './countries-routing.module';

import { CardModule } from 'primeng/card'
import { CardContryComponent } from '../components/card-contry/card-contry.component';
import { CountriesPageComponent } from '../pages/countries-page/countries-page.component';
import { ImageModule } from 'primeng/image';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { CountryDetailPageComponent } from '../pages/country-detail-page/country-detail-page.component';
import { ChipModule } from 'primeng/chip';
import { RelatedCountriesComponent } from '../components/related-countries/related-countries.component';
import { CarouselModule } from 'primeng/carousel';
import { NgxPaginationModule } from 'ngx-pagination';
import { SidebarModule } from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button'
import { FavoritesComponent } from '../components/favorites/favorites.component';


@NgModule({
  declarations: [

    CardContryComponent,
    CountriesPageComponent,
    SearchBarComponent,
    CountryDetailPageComponent,
    RelatedCountriesComponent,
    FavoritesComponent

    
  ],
  imports: [
    CommonModule,
    CountriesRouting,
    CardModule,
    ImageModule,
    ChipModule,
    CarouselModule,
    NgxPaginationModule,
    SidebarModule,
    ButtonModule,



  ]
})
export class CountriesModule { }
