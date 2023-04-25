import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit{

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
