import { Injectable } from '@angular/core';
import User from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn = false;

  constructor() { }

  login(user: User) {

    if (user.email == "aidan@gmail.com" && user.password=="letmein") {
      this.isLoggedIn = true;
    }
  }
  logout() {
    this.isLoggedIn = false;
  }
}
