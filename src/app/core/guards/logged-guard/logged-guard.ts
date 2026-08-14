import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth-service';

export const loggedGuard: CanActivateFn = (route, state) => {
  
const authService = inject(AuthService)

const isLogged = authService.isLogged()

const router = inject(Router)

 if(isLogged){
  return true
 }

 router.navigateByUrl('')
 return false
};
