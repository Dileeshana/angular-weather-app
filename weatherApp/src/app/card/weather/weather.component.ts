import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  @Input() temp_min?: number;
  @Input() temp_max?: number;
  @Input() humidity?: number;
  @Input() speed?: number; 
}
