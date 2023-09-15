import { Injectable } from '@angular/core';
import User from '../models/user.model';
import { BehaviorSubject } from 'rxjs';
import { AuthHttpService } from './auth-http.service';
import Token from '../models/token.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this._isLoggedIn$.asObservable();

  private _token = "";
  private tokenKey="AuthToken";

  public get token() {
    console.log("getting the token");
    return localStorage.getItem(this.tokenKey) as string;
    //return this._token;
  }

  public set token(token: string) {
    console.log("setting the token");

    // store the token in localStorage
    localStorage.setItem(this.tokenKey, token);
    this._token = token
  }
  constructor(private authHttpService: AuthHttpService, 
              private router: Router) { 

    let token = this.token;

    // TODO - needs some more work 
    // token could be expired
    if (token != null) {
      this._isLoggedIn$.next(true);
    }
  }
  login(user: User, destination: string = "") {
    this.authHttpService.login(user)
      .subscribe((token:Token) => {
        console.log(token);

        this.token = token.token;

        this._isLoggedIn$.next(true);

        if (destination != "") {

          // redirect here..
          this.router.navigate([destination]);

        }


      });
  }
  logout() {
    localStorage.removeItem(this.tokenKey);
    this._isLoggedIn$.next(false);
  }
}
