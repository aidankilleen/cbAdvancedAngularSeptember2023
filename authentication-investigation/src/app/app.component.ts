import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import User from './models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `

    <navbar/>

    <router-outlet/>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authentication investigation';

  

  constructor(public authService: AuthService, 
              public router: Router) {
    
  }

}
