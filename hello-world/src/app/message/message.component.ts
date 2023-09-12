import { Component, Input } from '@angular/core';
import Message from './message.model';

@Component({
  selector: 'message',
  template: `
    <div>
      <h2>{{ message.title }}</h2>
      <p>{{ message.text }}</p>
    </div>
  `,
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  //@Input() title?: string;
  //@Input() text?: string;
  @Input({ required:true }) message!: Message;

}
