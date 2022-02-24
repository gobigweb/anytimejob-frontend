import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { AuthenticationStateService } from 'src/app/services/authentication-state.service';

declare let $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public loggedIn: boolean = false;

  constructor(
    private router: Router, 
    private authService: AuthService,    
    private tokenService :TokenService,
    public authenticationStateService: AuthenticationStateService
  ) { }

  ngOnInit(): void {
    this.authenticationStateService.authState.subscribe(value => this.loggedIn = value);
    
    $(document).ready(function() {
      $('nav').coreNavigation({
        menuPosition: "right",
        container: true,	
        mode: 'sticky',	

        onStartSticky: function(){
          console.log('Start Sticky');
        },
        
        onEndSticky: function(){
          console.log('End Sticky');
        },
      
        dropdownEvent: 'hover',
        
        onOpenDropdown: function(){
          console.log('open');
        },

        onCloseDropdown: function(){
          console.log('close');
        },
        
        onInit: function(){
          console.log('Init coreNav');
        },

        onOpenMegaMenu: function(){
          console.log('Open Megamenu');
        },

        onCloseMegaMenu: function(){
          console.log('Close Megamenu');
        }	
      }); 
    
      // SmartMenus init
      $('#main-menu').smartmenus({
        mainMenuSubOffsetX: 1,
        mainMenuSubOffsetY: -0,
        subMenusSubOffsetX: 1,
        subMenusSubOffsetY: -0
      });
    });
  }

  logout(event: MouseEvent ){
    event.preventDefault();
    this.tokenService.destroyToken();
    this.authenticationStateService.changeAuthState(false);    
    this.router.navigate(['/login']);

  }

  

}