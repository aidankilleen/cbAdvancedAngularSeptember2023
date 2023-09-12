import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'accordion-panel',
  template: `
    <div (click)="onClick()">
      <h2 [ngStyle]="{ 'background-color': active ? 'lightgreen' : 'lightblue'}">{{ title }}</h2>
      <ng-content *ngIf="active"></ng-content>
    </div>
  `,
  styleUrls: ['./accordion-panel.component.css']
})
export class AccordionPanelComponent {

  @Input({required:true}) title!: string;
  @Input({alias:"open"}) active: boolean = false;
  @Output() toggle = new EventEmitter();

  onClick() {
    this.active = !this.active;
    this.toggle.emit();
  }
}
