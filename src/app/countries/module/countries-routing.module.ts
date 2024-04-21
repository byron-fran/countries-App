import { NgModule } from "@angular/core";
import { Route, Router, RouterModule } from "@angular/router";
import { CountriesPageComponent } from "../pages/countries-page/countries-page.component";
import { CountryDetailPageComponent } from "../pages/country-detail-page/country-detail-page.component";

const routes : Route[]= [
    {
        path : 'countries',
        component :CountriesPageComponent,

    },
    {
        path : 'country/:id',
        component : CountryDetailPageComponent
    },
    {
        path : '**',
        redirectTo : 'countries'
    }
]
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class CountriesRouting {}