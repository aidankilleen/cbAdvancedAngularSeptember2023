import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <member-form/>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms investigation';
}
