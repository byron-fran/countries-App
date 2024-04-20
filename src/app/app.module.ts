import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [AppComponent],
    imports: [

        HttpClientModule,
        CommonModule,
        RouterModule,
        BrowserModule

    ],
    bootstrap: [AppComponent]

})
export class AppModule { }

