import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { PublicComponent } from './public/public.component';
import { RegisterComponent } from './public/register/register.component';
import { PostJobComponent } from './secure/post-job/post-job.component';
import { ProfileComponent } from './secure/profile/profile.component';
import { SecureComponent } from './secure/secure.component';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';

const routes: Routes = [

  {
    path: '',
    component: SecureComponent,
    children: [
      {path: '', redirectTo: 'post-job', pathMatch: 'full'},
      {path: 'post-job', component: PostJobComponent, canActivate: [AfterLoginService]},
      {path: 'profile', component: ProfileComponent, canActivate: [AfterLoginService]},
    ]
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: 'login', component: LoginComponent, canActivate: [BeforeLoginService]},
      {path: 'register', component: RegisterComponent, canActivate: [BeforeLoginService]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
