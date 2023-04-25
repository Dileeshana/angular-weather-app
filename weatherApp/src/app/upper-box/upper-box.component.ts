import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { WeatherService } from "../services/weather.service";


@Component({
  selector: 'app-upper-box',
  templateUrl: './upper-box.component.html',
  styleUrls: ['./upper-box.component.scss']
})
export class UpperBoxComponent implements OnInit{

  constructor(private weatherService: WeatherService) {}

  cityName: string = 'Wellington';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  // onSubmit(){
  //   this.getWeatherData(this.cityName);
  //   this.cityName = '';
  // }

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
