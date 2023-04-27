import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  [x: string]: any;
  constructor(private weatherService: WeatherService) {}

    cityName: string = 'Wellington';
    weatherData?: WeatherData;

    ngOnInit(): void {
        this.getWeatherData(this.cityName);
    }
    
    onSubmit(){
        this.getWeatherData(this.cityName);
        this.cityName = '';
    }
    
    public getWeatherData(cityName: string) {
        this.weatherService.getWeatherData(cityName)
        .subscribe({
          next: (response) => {
                this.weatherData= response;
                console.log(response);
            }
      });
  }

}
