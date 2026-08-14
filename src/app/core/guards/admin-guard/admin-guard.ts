import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth-service';

export const adminGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(AuthService)

  const isAdmin = authService.isAdmin()
  const router = inject(Router)

  if(isAdmin){
    return true
  }

  router.navigateByUrl('')
  return false
};
