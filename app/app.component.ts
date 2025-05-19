import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <router-outlet></router-outlet>
    </ion-app>
  `,
  standalone: true,
  imports: [IonicModule, CommonModule, RouterOutlet]
})
export class AppComponent {
  constructor() {}
}
