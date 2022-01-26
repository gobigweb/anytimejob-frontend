import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name ='';
  email = '';
  password = '';
  passwordConfirmation = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.authService.register({
      name : this.name,
      email: this.email,
      password : this.password,
      password_confirmation : this.passwordConfirmation,
      role_id : 2
    }).subscribe(() => this.router.navigate(['/login']));
    
  }

}
