import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PublicPageComponent } from './pages/public-page/public-page.component';
import { PrivatePageComponent } from './pages/private-page/private-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { isAuthenticatedGuard } from './guards/is-authenticated.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent }, 
  { path: 'public', component: PublicPageComponent }, 
  { path: 'private', component: PrivatePageComponent, canActivate:[isAuthenticatedGuard] }, 
  { path: 'admin', component: AdminPageComponent }, 
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
