import { Injectable } from '@angular/core';
import User from './user.model';
import { BehaviorSubject } from 'rxjs';
import { AuthHttpService } from './auth-http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this._isLoggedIn$.asObservable();


  public token = "";

  constructor(private authHttpService: AuthHttpService) { }

  login(user: User) {

    this.authHttpService.login(user)
      .subscribe(token => {
        console.log(token);

        this.token = token.token;

        this._isLoggedIn$.next(true);
      });

  }
  logout() {
    this._isLoggedIn$.next(false);
  }
}
