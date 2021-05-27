import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { WeatherReportComponent } from './weather-report/weather-report.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgxUiLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
