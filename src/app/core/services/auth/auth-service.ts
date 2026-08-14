import { Injectable, signal } from '@angular/core';
import { LoginForm, RegisterForm } from '../../../features/auth-features/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isLogged = signal<boolean>(false)
  isAdmin = signal<boolean>(false)

  constructor(){
    // ici on vérifie si une informations est présente dans le localstorage afin de remettre les valeurs si besoin
    // récupération depuis le localStorage en utilisant la clé
    if(localStorage.getItem('isLogged') === 'true'){
      this.isLogged.update((v) => !v)
    }

    if(localStorage.getItem('isAdmin') === 'true'){
      this.isAdmin.update((v) => !v)
    }
  }


  login(loginForm : LoginForm){
    if(loginForm.email === 'admin@mail.com' && loginForm.password === 'admin1234'){
      this.isLogged.update((v) => !v)
      this.isAdmin.update((v) => !v)

      // ajout dans le localStorage ( clé - valeur) en string
      localStorage.setItem('isLogged','true')
      localStorage.setItem('isAdmin','true')
    }
  }

  register(registerForm : RegisterForm){

  }

  logout(){
    this.isLogged.set(false)
    this.isAdmin.set(false)

    // suppression d'un seul élément du localStorage
    //localStorage.removeItem('isLogged')

    // vider le local storage complètement
    localStorage.clear()
  }
}
