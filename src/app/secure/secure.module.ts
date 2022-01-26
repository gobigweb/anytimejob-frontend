import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { PostJobComponent } from './post-job/post-job.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [    
    HeaderComponent,
    FooterComponent,
    SecureComponent,
    PostJobComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,    
    AppRoutingModule,
    RouterModule
  ]
})
export class SecureModule { }
