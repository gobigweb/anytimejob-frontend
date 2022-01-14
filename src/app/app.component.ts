import { Component } from '@angular/core';
import 'corenav/coreNavigation.css';
import 'corenav';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'anytimejob-frontend';
  ngOnInit() {
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
}
