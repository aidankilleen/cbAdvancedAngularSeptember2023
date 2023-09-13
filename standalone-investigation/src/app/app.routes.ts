import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
    { path:"", redirectTo:"home", pathMatch:"full"},
    { path:"home", component: HomePageComponent }, 
    { path:"about", component: AboutPageComponent }, 
    { path:"contact", component: ContactPageComponent } 
];
