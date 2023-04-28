import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';
import { AppComponent } from '../app.component';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() search: EventEmitter<string> = new EventEmitter()

  city: FormControl = new FormControl;

  constructor() {
    this.city.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(city => {
      this.search.emit(city)
      // console.log(city)
    })
  }




  // @Input() AppComponent: any
  // @Input() cityName: any

  // onSubmit(){
    
  // }

  // constructor(private weatherService: WeatherService) {}

  //   cityName: string = 'Wellington';
  //   weatherData?: WeatherData;

  //   ngOnInit(): void {
  //       this.getWeatherData(this.cityName);
  //   }
    
  //   onSubmit(){
  //       this.getWeatherData(this.cityName);
  //       this.cityName = '';
  //   }
    
  //   public getWeatherData(cityName: string) {
  //       this.weatherService.getWeatherData(cityName)
  //       .subscribe({
  //         next: (response) => {
  //               this.weatherData= response;
  //               console.log(response);
  //           }
  //     });
  // }
  
}

