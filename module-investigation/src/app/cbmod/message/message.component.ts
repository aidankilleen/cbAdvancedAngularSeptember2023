import { Component, Input } from '@angular/core';

@Component({
  selector: 'cb-message',
  template: `
    <div>
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
    </div>
  `,
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input() title = "";
  @Input() text = "";

}
