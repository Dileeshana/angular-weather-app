import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  
  weatherData$?: Observable<WeatherData>
  
  constructor(private _weatherService: WeatherService) {}


  search(city: string) {
    this.weatherData$ = this._weatherService.getWeatherData(city);
  }


}
