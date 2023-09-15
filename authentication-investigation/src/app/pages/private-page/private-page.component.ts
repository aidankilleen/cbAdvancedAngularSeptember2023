import { Component, OnInit } from '@angular/core';
import Member from 'src/app/models/member.model';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'private-page',
  template: `
    <p>
      {{ members | json }}
    </p>

    <button (click)="onAdd()">Add Member</button>

  `,
  styleUrls: ['./private-page.component.css']
})
export class PrivatePageComponent implements OnInit {

  members: Member[] = [];

  constructor(public memberService: MemberService) {

  }
  ngOnInit(): void {
    this.memberService.getAll()
      .subscribe((members:Member[]) => {
        this.members = members;
      } );
  }

  onAdd() {

    let member = new Member(0, 
                            "Aidans New Member", 
                            "anm@gmail.com", 
                            true);

    this.memberService.add(member)
      .subscribe(addedMember => {
        this.members.push(addedMember);
      });
  }



}
