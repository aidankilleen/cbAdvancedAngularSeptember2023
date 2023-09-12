import { Component, OnInit } from '@angular/core';
import { MemberService } from './member.service';
import Member from './member.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>
    <hr>
    <button (click)="onAdd()">Add Member</button>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          *ngFor="let member of members$ | async">
          <td>{{ member.id }}</td>
          <td>{{ member.name }}</td>
          <td>{{ member.email }}</td>
          <td>{{ member.active ? "Active" : "Inactive" }}</td>
          <td>
            <button (click)="onDelete(member.id)">Delete</button>
            <button (click)="onUpdate(member)">Update</button>
          </td>
        </tr>
      </tbody>
    </table>
    <hr>

    <div *ngIf="showDialog">
      <h2>New Member</h2>
      <input [(ngModel)]="editingMember.name" placeholder="Name"/><br>
      <input [(ngModel)]="editingMember.email" placeholder="Email"/><br>
      <input type="checkbox" [(ngModel)]="editingMember.active"/><br>
   
      <button (click)="onSave()">Save</button>
      <button (click)="onCancel()">Cancel</button>
    </div>
    <hr>
    {{ editingMember | json }}

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'async investigation';
  
  editingMember: Member = new Member();

  members$!: Observable<Member[]>;

  showDialog = false;

  constructor(public memberService: MemberService) {
  }

  ngOnInit(): void {
    this.members$ = this.memberService.getAll();

  }

  onUpdate(member: Member) {

    // copy this member to the editing member - the object that is 
    // bound to the controls in the dialog
    this.editingMember = new Member(member.id, 
                                    member.name, 
                                    member.email, 
                                    member.active);

    this.showDialog = true;
/*
    member.active = !member.active;


*/
  }

  onCancel() {
    this.showDialog = false;
  }
  onSave() {

    if (this.editingMember.id == 0) {
      // add
      this.memberService.add(this.editingMember)
      .subscribe(addedMember => {
        this.members$ = this.memberService.getAll();
        this.showDialog = false;
      });

    } else {
      // update
      this.memberService.update(this.editingMember)
      .subscribe(member => {
        this.members$ = this.memberService.getAll();
        this.showDialog = false;
      })
    }
  }

  onAdd() {

    this.editingMember = new Member();
    this.showDialog = true;
  }
  onDelete(id: number) {
    if (confirm("Are you sure?")) {

      this.memberService.delete(id)
        .subscribe(()=>{ 
          this.members$ = this.memberService.getAll();
        });
    }
  }
  onSelect(id: number) {

    this.memberService.get(id)
      .subscribe(member => alert(JSON.stringify(member)));
  }




}
