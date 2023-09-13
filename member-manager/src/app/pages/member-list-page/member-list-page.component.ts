import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Member from 'src/app/models/member.model';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'member-list-page',
  template: `

    <p-table 
      dataKey="id" 
      editMode="row"
      [value]="(members$ | async)!">
      <ng-template pTemplate="header">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
          <th>Controls</th>
        </tr>
      </ng-template>

      <ng-template pTemplate="body" let-member let-editing="editing" let-ri="rowIndex">
        <tr [pEditableRow]="member">
          <td>{{ member.id }}</td>
          <td>
            <p-cellEditor>
              <ng-template pTemplate="input">
                <input pInputText type="text" [(ngModel)]="member.name">
              </ng-template>
              <ng-template pTemplate="output">
                {{ member.name }}
              </ng-template>

            </p-cellEditor>
          </td>
          <td>{{ member.email }}</td>
          <td>{{ member.active ? "Active" : "Inactive" }}</td>
          <td>
            <button 
              *ngIf="!editing" 
              pButton pRipple 
              type="button" 
              pInitEditableRow 
              (click)="onRowEditInit(member)"
              icon="pi pi-pencil" 
              class="p-button-rounded p-button-text">
            </button>
            <button 
              *ngIf="editing" 
              pButton pRipple 
              type="button" 
              pSaveEditableRow 
              icon="pi pi-check" 
              class="p-button-rounded p-button-text p-button-success mr-2">
            </button>
            <button 
              *ngIf="editing" 
              pButton pRipple 
              type="button" 
              pCancelEditableRow 
              icon="pi pi-times" 
              class="p-button-rounded p-button-text p-button-danger">
            </button>
 
          </td>
        </tr>
      </ng-template>
    </p-table>
  `,
  styleUrls: ['./member-list-page.component.css']
})
export class MemberListPageComponent implements OnInit {

  members$!: Observable<Member[]>;

  clonedMembers: { [s: string]: Member } = {};

  constructor(public memberService: MemberService) {
  }
  ngOnInit(): void {
    this.members$ = this.memberService.getAll();
  }

  onRowEditInit(member: Member) {
    this.clonedMembers[`${member.id}`] = { ...member };
  }

}
