import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import User from 'src/app/user.model';

@Component({
  selector: 'login-page',
  template: `

    <div *ngIf="!(authService.isLoggedIn$ | async)">
    <input type="text" [(ngModel)]="user.email"/><br>
    <input type="password" [(ngModel)]="user.password"/><br>
    <p-button 
      label="Login" 
      (click)="onClick()"/>
    </div>
    <p-button 
      *ngIf="authService.isLoggedIn$ | async" 
      label="Logout" 
      (click)="authService.logout()"/>
  `,
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  user: User = new User();
  constructor(public authService: AuthService) {
  }
  onClick() {
    this.authService.login(this.user);
  }
}
