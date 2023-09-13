import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
            FormsModule, 
            RouterOutlet, 
            RouterModule,
            MessageComponent],
  template: `
    <h1>{{ title | titlecase }}</h1>
 
    <nav>
      <a routerLink="home">Home</a> |
      <a routerLink="about">About</a> |
      <a routerLink="contact">Contact</a> 
    </nav>
    <router-outlet/>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'standalone investigation';
  name = "Aidan";
}
