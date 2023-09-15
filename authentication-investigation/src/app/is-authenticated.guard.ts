import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  let loggedIn = false;

  authService.isLoggedIn$.pipe(
    tap((isLoggedIn: boolean) => loggedIn = isLoggedIn))
      .subscribe()
  
      if (!loggedIn) {
        // redirect to login page
        // TBD pass a message to the login form
        // along with a redirect location
        // show the message
        // if successful login -> redirect location
        router.navigate(['login']);

      }
  return loggedIn;
};
