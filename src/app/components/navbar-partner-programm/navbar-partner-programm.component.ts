import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-partner-programm',
  templateUrl: './navbar-partner-programm.component.html',
  styleUrls: ['./navbar-partner-programm.component.scss']
})
export class NavbarPartnerProgrammComponent implements OnInit {
  menuOptions= [];
  constructor() { }

  ngOnInit() {
    this.menuOptions = [
      {
         menuItem: 'El programa',
         routerLink: 'programa'
      },{
          menuItem: 'Puntaje',
          routerLink: 'puntaje'
      },{
          menuItem: 'Merchandising',
          routerLink: 'merchandising'
      },{
          menuItem: 'Beneficios',
          routerLink: 'beneficios'
      },{
          menuItem: 'MKT Tools',
          routerLink: 'marketing-tools'
      }
    ]
  }

}
