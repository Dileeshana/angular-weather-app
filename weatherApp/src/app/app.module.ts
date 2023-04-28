import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { InfoComponent } from './card/info/info.component';
import { WeatherComponent } from './card/weather/weather.component';
import { InfoCardComponent } from './card/weather/info-card/info-card.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CardComponent,
    InfoComponent,
    WeatherComponent,
    InfoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
