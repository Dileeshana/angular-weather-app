import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent {

  @Input() iconSrc!: string;
  @Input() label!: string;
  @Input() value!: number;
  @Input() unit!: string;
}
