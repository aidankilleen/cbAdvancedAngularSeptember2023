import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      home-page works!
    </p>
  `,
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

}
