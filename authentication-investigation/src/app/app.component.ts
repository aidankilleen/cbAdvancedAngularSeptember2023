import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import User from './user.model';
import { Router } from '@angular/router';

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
      command: () => {
        //alert("clicked login");

        // programatically navigate to the login page
        this.router.navigate(['login'])

      }
    }

  ];

  constructor(public authService: AuthService, 
              public router: Router) {
    
  }

}
