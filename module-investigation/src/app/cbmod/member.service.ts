import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  members = [
    { id:1, name:"Alice", email:"alice@gmail.com", active: false }
  ]

  constructor() { }
}
