import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import User from './user.model';

@Component({
  selector: 'app-root',
  template: `
    <p-menubar [model]="items"></p-menubar>


    {{ (authService.isLoggedIn$ | async) ? "Logged In" : "Not Logged In"}}



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
    }, 
    {
      label: 'Login', 
      routerLink: 'login'
    }

  ];

  constructor(public authService: AuthService) {
    
  }

}
