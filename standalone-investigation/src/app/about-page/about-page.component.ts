import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'about-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      about-page works!
    </p>
  `,
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {

}
