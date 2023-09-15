import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'navbar',
  template: `
    <p-menubar [model]="items"></p-menubar>

    {{ loggedIn ? "logged in " : "logged out"}}
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn:boolean = false;


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
      }, 
      disabled: this.loggedIn
    }, 
    {
      label: 'Logout',
      command: () => {
        this.authService.logout();
      }, 
      //disabled: !this.loggedIn
    }
  ];

  constructor(public authService: AuthService, 
              public router: Router) {

  }
  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(loggedIn => {

      this.loggedIn = loggedIn;

      let loginMenu = this.items.find(item => item.label == 'Login');

      if (loginMenu) {
        loginMenu.disabled = this.loggedIn;
      }

      let logoutMenu = this.items.find(item => item.label == 'Logout');

      if (logoutMenu) {
        logoutMenu.disabled = !this.loggedIn;
      }
    })
  }
}
