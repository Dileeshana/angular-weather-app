import { Component, Input } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  // @Input() weatherData!: WeatherData;
  @Input() temp?: number;
  @Input() city?: string;

  
}
