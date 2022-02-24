import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { AuthenticationStateService } from 'src/app/services/authentication-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    private router: Router, 
    private authService: AuthService,
    private tokenService :TokenService,
    private authenticationStateService: AuthenticationStateService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  submit(): void {
    this.authService.login(this.form.getRawValue())
    .subscribe({
      next: (res) => this.tokenStorage(res),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete:() => {
        this.authenticationStateService.changeAuthState(true);
        this.router.navigate(['/post-job']);
      }
    });
  }

  tokenStorage(token: { jwt: string; }){
    this.tokenService.setTokenStorage(token.jwt);
  }

}
