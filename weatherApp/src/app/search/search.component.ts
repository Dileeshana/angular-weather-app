import { Component } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
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
    
    private getWeatherData(cityName: string) {
        this.weatherService.getWeatherData(cityName)
        .subscribe({
          next: (response) => {
                this.weatherData= response;
                console.log(response);
            }
      });
  }
}
