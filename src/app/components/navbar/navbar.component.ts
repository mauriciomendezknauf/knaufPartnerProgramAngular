import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIGatewayMethods, AppPublicService } from '../../services/app-public.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    menuOptions = [];
    constructor( private router: Router, private _publicService: AppPublicService ) { }

    async closeSession() {
        let params = { }
        try {
            let serverResponse = await this._publicService.callAPIGatewayMethod( APIGatewayMethods.closeSession, params )
            this.router.navigate(['/'])
        } catch ( e ) {
        alert( "Error serverResponse ")
        }
    }
    ngOnInit() {
        this.menuOptions = [
          {
              menuItem: 'Partner Program',
              routerLink: 'partnerprogramm'
          },{
              menuItem: 'Contáctenos',
              routerLink: 'contacto'
          }
        ]
    }
}
