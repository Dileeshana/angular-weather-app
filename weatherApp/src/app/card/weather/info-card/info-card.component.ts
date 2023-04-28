import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
  @Input() iconSrc!: string;
  @Input() label!: string;
  @Input() value!: string | null;
  @Input() unit!: string;
}
