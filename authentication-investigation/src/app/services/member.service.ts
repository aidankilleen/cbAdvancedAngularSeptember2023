import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Member from '../models/member.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  // TODO - externalise this to avoid repetition
  url = "http://20.166.249.138/members";

  constructor(private http: HttpClient, 
              private authService: AuthService) { }

  getAll(): Observable<Member[]> {
    console.log(this.authService.token);

    //let headers:HttpHeaders = new HttpHeaders();
    //headers = headers.set('Authorization', `Bearer ${this.authService.token}`);

    //return this.http.get<Member[]>(this.url, { headers:headers });
    return this.http.get<Member[]>(this.url);
  }

  add(member: Member): Observable<Member> {

    return this.http.post<Member>(this.url, member);
    
  }
}
