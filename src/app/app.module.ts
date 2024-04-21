import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    declarations: [AppComponent],
    imports: [

        HttpClientModule,
        CommonModule,
        RouterModule,
        BrowserModule,
        AppRoutingModule

    ],
    bootstrap: [AppComponent]

})
export class AppModule { }

