import { Component, OnInit } from '@angular/core';
import Member from 'src/app/member.model';
import { MemberService } from 'src/app/member.service';

@Component({
  selector: 'private-page',
  template: `
    <p>
      {{ members | json }}
    </p>
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



}
