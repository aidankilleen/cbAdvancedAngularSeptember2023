import { Component, EventEmitter, Input, Output } from '@angular/core';
import Member from '../member.model';

@Component({
  selector: 'member-dialog',
  template: `
    <div *ngIf="show" class="modal" (click)="onCancel()">
      <div class="modal-content" (click)="onClick($event)">
        <h2>{{ title }}</h2>
        <input [(ngModel)]="_member.name" placeholder="Name"/><br>
        <input [(ngModel)]="_member.email" placeholder="Email"/><br>
        <input type="checkbox" [(ngModel)]="_member.active"/><br>
        
        <button (click)="onSave()">Save</button>
        <button (click)="onCancel()">Cancel</button>
      </div>
    </div>
    
  `,
  styleUrls: ['./member-dialog.component.css']
})
export class MemberDialogComponent {

  @Input() show = false;
  @Output() showChange = new EventEmitter();

  _member!: Member;

  @Input() title = "Add Member";
  @Input({ required: true }) set member(memberToEdit: Member) {
    this._member = new Member(memberToEdit.id, 
                              memberToEdit.name, 
                              memberToEdit.email, 
                              memberToEdit.active);
    this.title = memberToEdit.id == 0 ? "Add Member" : "Edit Member";

  };

  @Output() memberChange = new EventEmitter();

  @Output() save = new EventEmitter();

  onClick(event:Event) {
    // do nothing
    event.stopPropagation();
  }
  onSave() {
    this.show = false;
    this.showChange.emit(this.show);
    this.memberChange.emit(this._member);
    this.save.emit();
  }
  onCancel() {
    this.show = false;
    this.showChange.emit(this.show);
  }
}
