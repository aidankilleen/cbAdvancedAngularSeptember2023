import { Component } from '@angular/core';
import { MemberService } from './cbmod/member.service';
import Member from './cbmod/member.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <cb-message 
      title="CB Message" 
      text="This is a cb message"/>


    <input 
      type="range" 
      [max]="text.length" 
      [(ngModel)]="length"/>
    <br>


    {{ text | summary:length }}
    <hr>

      {{ member | json }}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'module investigation';
  length = 20;
  text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus voluptatem hic cupiditate asperiores, tempora commodi dolorem. Ipsum, incidunt itaque perferendis veritatis hic cupiditate expedita voluptates voluptatem consectetur architecto, repellendus facilis?"

  member = new Member();

  constructor(public memberService: MemberService) {

  }
}
