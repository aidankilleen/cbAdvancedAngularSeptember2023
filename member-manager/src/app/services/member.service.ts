import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Member from '../models/member.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  
  url: string = "http://localhost:3000/members"
  
  constructor(private http: HttpClient) { 
  }
  
  getAll(): Observable<Member[]> {
    return this.http.get<Member[]>(this.url);
  }
  
  update(member: Member): Observable<Member> {
    return this.http.put<Member>(`${this.url}/${member.id}`, member);
  }

  delete(id: number) {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
