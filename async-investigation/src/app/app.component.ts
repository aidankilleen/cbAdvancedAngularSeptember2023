import { Component, OnInit } from '@angular/core';
import { MemberService } from './member.service';
import Member from './member.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>
    <hr>

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
        <tr *ngFor="let member of members$ | async">
          <td>{{ member.id }}</td>
          <td>{{ member.name }}</td>
          <td>{{ member.email }}</td>
          <td>{{ member.active ? "Active" : "Inactive" }}</td>
        </tr>
      </tbody>
    </table>
    <hr>

    {{ members$ | async | json }}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'async investigation';
  //members!: Member[];
  members$!: Observable<Member[]>;

  constructor(public memberService: MemberService) {
  }
  ngOnInit(): void {
    this.members$ = this.memberService.getAll();
      
    //.subscribe(members => {
    //    this.members = members;
    //  })
  }


}
