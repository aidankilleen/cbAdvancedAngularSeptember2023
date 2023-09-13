import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Member from 'src/app/models/member.model';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'member-list-page',
  template: `

    <p-table [value]="(members$ | async)!">
      <ng-template pTemplate="header">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
        </tr>
      </ng-template>

      <ng-template pTemplate="body" let-member>
        <tr>
          <td>{{ member.id }}</td>
          <td>{{ member.name }}</td>
          <td>{{ member.email }}</td>
          <td>{{ member.active ? "Active" : "Inactive" }}</td>
        </tr>
      </ng-template>
    </p-table>
  `,
  styleUrls: ['./member-list-page.component.css']
})
export class MemberListPageComponent implements OnInit {

  members$!: Observable<Member[]>;

  constructor(public memberService: MemberService) {
  }
  ngOnInit(): void {
    this.members$ = this.memberService.getAll();
  }


}
