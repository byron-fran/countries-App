import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';



export const routes: Routes = [
    {
        path : '',
        loadChildren : () => import('./countries/module/countries.module').then( m => m.CountriesModule)
    }
];

@NgModule({
    imports : [ RouterModule.forRoot(routes, {useHash : true})],
    exports : [RouterModule]
})
export class AppRoutingModule {}