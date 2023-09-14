import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService: AuthService = inject(AuthService);

  let loggedIn = false;

  authService.isLoggedIn$.pipe(
    tap((isLoggedIn: boolean) => loggedIn = isLoggedIn))
      .subscribe()
  
  return loggedIn;
};
