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
}
