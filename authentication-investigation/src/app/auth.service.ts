import { Injectable } from '@angular/core';
import User from './user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor() { }

  login(user: User) {

    if (user.email == "aidan@gmail.com" && user.password=="letmein") {
      this._isLoggedIn$.next(true);
    }
  }
  logout() {
    this._isLoggedIn$.next(false);
  }
}
