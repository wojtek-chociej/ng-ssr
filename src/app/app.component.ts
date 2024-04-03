import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformServer } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavigationComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isPlatformServer = isPlatformServer(this.platformId);

  constructor(@Inject(PLATFORM_ID) private platformId: string){}

  title = 'ng-ssr';
}
