import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p-menubar [model]="items"></p-menubar>

    <router-outlet/>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'member manager';

  items = [{
    label: 'Home', 
    icon: 'pi pi-home',
    routerLink: 'home'
  },{
    label: 'About', 
    icon: 'pi pi-question-circle',
    routerLink: 'about'
  },{
    label: 'Contact', 
    icon: 'pi pi-envelope',
    routerLink: 'contact'
  },{
    label: 'Members', 
    icon: 'pi pi-users',
    routerLink: 'memberlist'
  }];
}
