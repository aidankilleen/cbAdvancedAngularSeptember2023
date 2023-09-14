import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import Member from 'src/app/models/member.model';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'member-list-page',
  template: `

    <p-button 
      icon="pi pi-user-plus" 
      label="Add Member"
      (click)="onAddMember()" >
    </p-button>
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
          <td>
            <p-cellEditor>
              <ng-template pTemplate="input">
                <input pInputText type="text" [(ngModel)]="member.email">
              </ng-template>
              <ng-template pTemplate="output">
                {{ member.email }}
              </ng-template>
            </p-cellEditor>
          </td>
          <td>
            <p-cellEditor>
              <ng-template pTemplate="input">
                <input pInputText type="checkbox" [(ngModel)]="member.active">
              </ng-template>
              <ng-template pTemplate="output">
                {{ member.active ? "Active" : "Inactive" }}
              </ng-template>
            </p-cellEditor>            
          </td>



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
              *ngIf="!editing" 
              pButton pRipple 
              type="button" 
              (click)="onRowEditDelete(member)"
              icon="pi pi-trash" 
              class="p-button-rounded p-button-text">
            </button>            
            <button 
              *ngIf="editing" 
              pButton pRipple 
              type="button" 
              pSaveEditableRow 
              (click)="onRowEditSave(member)"
              icon="pi pi-check" 
              class="p-button-rounded p-button-text p-button-success mr-2">
            </button>
            <button 
              *ngIf="editing" 
              pButton pRipple 
              type="button" 
              pCancelEditableRow 
              (click)="onRowEditCancel(member, ri)"
              icon="pi pi-times" 
              class="p-button-rounded p-button-text p-button-danger">
            </button>
 
          </td>
        </tr>
      </ng-template>
    </p-table>
    <p-dialog header="Header" [(visible)]="showDialog" [modal]="true" [style]="{ width: '50vw' }" [draggable]="false" [resizable]="false">
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-dialog>
    <p-toast></p-toast>
    <p-confirmDialog [style]="{width: '50vw'}"></p-confirmDialog>
  `,
  styleUrls: ['./member-list-page.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class MemberListPageComponent implements OnInit {

  members$!: Observable<Member[]>;

  showDialog = false;

  clonedMembers: { [s: string]: Member } = {};

  constructor(public memberService: MemberService, 
              private messageService: MessageService, 
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.members$ = this.memberService.getAll();
  }

  onRowEditInit(member: Member) {
    this.clonedMembers[`${member.id}`] = { ...member };
  }

  onRowEditCancel(member: Member, index: number) {

    let clonedMember = this.clonedMembers[`${member.id}`];
    member.name = clonedMember.name;
    member.email = clonedMember.email;
    member.active = clonedMember.active;
    delete this.clonedMembers[`${member.id}`];
  }

  onRowEditSave(member: Member) {

    this.memberService.update(member)
      .subscribe(()=>{
        //alert("saved");
        this.messageService.add({ 
          severity: 'success', 
          summary: 'Saved', 
          detail: 'The changes were saved' });
      });
  }
  onRowEditDelete(member: Member) {

    this.confirmationService.confirm({
        message: 'Are you sure?', 
        header: 'Delete', 
        icon: 'pi pi-exclamation-triangle', 
        accept: () => {
          this.memberService.delete(member.id)
            .subscribe(()=>{
              this.messageService.add({
                severity: 'warn', 
                summary: 'Deleted', 
                detail: `${ member.name } was deleted` 
              });
              // TODO - can you avoid another request?
              this.members$=this.memberService.getAll();
            })
        }, 
        reject: () => {

        }
    });
  }
  onAddMember() {
    this.showDialog = true;
  }
}
