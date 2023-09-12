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
  get(id: number): Observable<Member> {

    return this.http.get<Member>(`${this.url}/${id}`);
  }
  delete(id: number): Observable<void> {

    return this.http.delete<void>(`${this.url}/${id}`);
  }
  add(member: Member): Observable<Member> {

    return this.http.post<Member>(this.url, member);
  }
  update(member: Member): Observable<Member> {

    return this.http.put<Member>(`${this.url}/${member.id}`, member);
  }


}
