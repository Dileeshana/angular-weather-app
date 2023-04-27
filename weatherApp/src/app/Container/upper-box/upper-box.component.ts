import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from '../../models/weather.model';
import { WeatherService } from "../../services/weather.service";
import { AppComponent } from "../../app.component";


@Component({
  selector: 'app-upper-box',
  templateUrl: './upper-box.component.html',
  styleUrls: ['./upper-box.component.scss']
})
export class UpperBoxComponent{
  @Input() weatherData: any
}
