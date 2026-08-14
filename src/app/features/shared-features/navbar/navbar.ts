import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  authService = inject(AuthService)
  router = inject(Router)


  isLoggedNav = this.authService.isLogged
  isAdmin = this.authService.isAdmin

  logout(){
    this.authService.logout()
    this.router.navigateByUrl('')
  }
}
