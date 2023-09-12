import { Injectable } from '@angular/core';
import Member from './member.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  members: Member[] = []; 
  url: string = "http://localhost:3000/members";

  constructor(public http: HttpClient) { }

  getAll(): Observable<Member[]> {

    return this.http.get<Member[]>(this.url);

  }
}
