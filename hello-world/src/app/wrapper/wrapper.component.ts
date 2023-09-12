import { Component } from '@angular/core';

@Component({
  selector: 'wrapper',
  template: `
    <div [ngStyle]="{
      'border':'1px solid black', 
      'border-radius':'5px', 
      'margin':'10px', 
      'padding': '1em'

    }">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent {

}
