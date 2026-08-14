import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {


  loginForm : FormGroup;

  fb = inject(FormBuilder)

  authService = inject(AuthService)
  router = inject(Router)

  constructor(){
    this.loginForm = this.fb.group({
      email : ['admin@mail.com',[Validators.required,Validators.email]],
      password : ['admin1234',[Validators.required,Validators.minLength(8)]],
    })
  }

  login(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value)
      this.router.navigateByUrl('/list-car')
    }
  }
}
