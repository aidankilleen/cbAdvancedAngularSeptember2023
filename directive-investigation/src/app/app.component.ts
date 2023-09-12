import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <div *ngFor="let i of [1,2,3,4,5]">
      <div 
        *delay="1000 * i">
        {{ i }}
      </div>
    </div>

    <!--
    <div [box]="boxColour">
      is this a {{ boxColour }} box?
    </div>

    <select [(ngModel)]="boxColour">
      <option 
        *ngFor="let colour of colours">
        {{ colour }}
      </option>
    </select>
    -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive investigation';
  boxColour = "red";
  time=1000;

  colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
}
