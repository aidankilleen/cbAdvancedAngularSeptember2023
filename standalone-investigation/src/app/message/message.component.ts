import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'message',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      message works!
    </p>
  `,
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

}
