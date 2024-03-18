import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss',
})
export class InfoCardComponent {
  @Input() ellipseColorClass: 'light-green-ellipse' | 'dark-green-ellipse' =
    'light-green-ellipse';
  @Input() title?: string;
  @Input() description?: string;
}
