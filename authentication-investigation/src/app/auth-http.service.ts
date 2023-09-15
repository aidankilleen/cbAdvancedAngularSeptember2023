import { Injectable } from '@angular/core';
import User from './user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Token from './token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {

  url = "http://20.166.249.138/auth";

  constructor(private http: HttpClient) { }

  login(user: User): Observable<Token> {

    return this.http.post<Token>(`${this.url}/login`, user)

  }
}
