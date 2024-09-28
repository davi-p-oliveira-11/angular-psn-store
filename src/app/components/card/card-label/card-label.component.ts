import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-label',
  standalone: true,
  imports: [],
  templateUrl: './card-label.component.html',
  styleUrl: './card-label.component.css',
})
export class CardLabelComponent {
  @Input()
  gameLabel: string = '';
}
