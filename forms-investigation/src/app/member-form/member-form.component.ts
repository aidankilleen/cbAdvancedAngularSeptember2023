import { Component } from '@angular/core';
import Member from '../models/member.model';
import { NgForm } from '@angular/forms';
import { forbiddenNames } from '../forbiddenNames';



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
        minlength="2"
        [forbiddenNames]="forbiddenNameList"
        class="form-control"
        #name="ngModel"
      />
      <div *ngIf="name.errors && (name.dirty || name.touched)"
        class="alert alert-warning">
        <div *ngIf="name.errors?.['required']">Name is required</div>
        <div *ngIf="name.errors?.['minlength']">
          Minimum Length {{ name.errors?.['minlength'].requiredLength }} not satisfied
          Actual Length {{ name.errors?.['minlength'].actualLength }} characters supplied
        </div>
        <div *ngIf="name.errors?.['forbiddenName']">
          {{ name.value }} is on the banned list of names
        </div>

        {{ name.errors | json }}
      </div>
      <br>
      <label class="form-label" for="email">Email</label>
      <input
        name="email"
        email="true"
        [(ngModel)]="editingMember.email"
        class="form-control"
        required
        #email="ngModel"
      />
      <div *ngIf="email.errors && (email.dirty || email.touched)"
        class="alert alert-warning">

        <div *ngIf="email.errors?.['required']">Email is required</div>
        <div *ngIf="email.errors?.['email']">
          Not a valid email ({{ email.value }})
        </div>
      </div>      
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

  // forbiddenNames = ["Adolf", "Saddam", "Stalin"];

  forbiddenNameList = forbiddenNames;
  editingMember = new Member();
  
  onSubmit(frmMember: NgForm) {
    alert(JSON.stringify(frmMember.value));
  }
}
