import { Component } from '@angular/core';
import Member from '../models/member.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'member-form',
  template: `
    <form (ngSubmit)="onSubmit(frmMember)" #frmMember="ngForm">
    <label
      class="form-label"
      for="id">Id</label>
      <input
        name="id"
        [(ngModel)]="editingMember.id"
        readonly
        class="form-control"
      />
      <br>      
      <label class="form-label" for="name">Name</label>
      <input
        name="name"
        [(ngModel)]="editingMember.name"
        required
        class="form-control"
        #name="ngModel"
      />
      <div *ngIf="name.errors && (name.dirty || name.touched)"
        class="alert alert-warning">
        Errors - name is required
      </div>
      <br>
      <label class="form-label" for="email">Email</label>
      <input
        name="email"
        [(ngModel)]="editingMember.email"
        class="form-control"
      />
      <br>
      <label class="form-check-label" for="active">Active</label>
      <input 
        type="checkbox" 
        name="active"
        [(ngModel)]="editingMember.active"
        class="form-chack-input"
        />
      <br>

      <input 
        class="btn btn-primary"   
        [disabled]="frmMember.invalid"
        type="submit" 
        value="Submit"
      />
    </form>
    <hr>
    {{ frmMember.invalid }}
  `,
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent {

  editingMember = new Member();
  
  onSubmit(frmMember: NgForm) {
    alert(JSON.stringify(frmMember.value));
  }
}
