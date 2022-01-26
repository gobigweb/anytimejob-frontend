import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input('user') user!: User;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
  }

  logout() : void{
    this.authService.logout().subscribe(() => {
      console.log('success');
    });
  }

}