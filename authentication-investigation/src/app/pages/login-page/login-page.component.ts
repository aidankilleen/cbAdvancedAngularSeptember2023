import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import User from 'src/app/models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login-page',
  template: `

    {{ message }}<br>
    {{ destination }}<br>



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
export class LoginPageComponent implements OnInit {

  message: string = "";
  destination: string = "";

  user: User = new User();
  constructor(public authService: AuthService, 
              public activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {

    this.message = this.activatedRoute.snapshot.params['message'];
    this.destination = this.activatedRoute.snapshot.params['destination'];
  }
  onClick() {
    this.authService.login(this.user, this.destination);

    // redirect to destination if exists
  }
}
