import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import User from './user.model';

@Component({
  selector: 'app-root',
  template: `
    <p-menubar [model]="items"></p-menubar>


    {{ authService.isLoggedIn ? "Logged In" : "Not Logged In"}}

    <p-button 
      *ngIf="!authService.isLoggedIn" 
      label="Login" 
      (click)="onClick()"/>
    <p-button 
      *ngIf="authService.isLoggedIn" 
      label="Logout" 
      (click)="authService.logout()"/>

    <router-outlet/>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authentication investigation';

  items = [
    {
      label: 'Home' , 
      icon: 'pi pi-home',
      routerLink: 'home' 
    }, 
    {
      label: 'Public', 
      icon: 'pi pi-lock-open', 
      routerLink: 'public'
    }, 
    {
      label: 'Private', 
      icon: 'pi pi-lock',
      routerLink: 'private'
    }, 
    {
      label: 'Admin',
      icon: 'pi pi-user', 
      routerLink: 'admin'
    }

  ];

  constructor(public authService: AuthService) {
    
  }
  onClick() {
    let user = new User("aidan@gmail.com", "letmein");
    this.authService.login(user);
  }
}
