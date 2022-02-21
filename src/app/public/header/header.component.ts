import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
