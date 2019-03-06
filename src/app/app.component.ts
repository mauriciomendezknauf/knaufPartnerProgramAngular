import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIGatewayMethods, AppPublicService } from './services/app-public.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // title = 'app';
  // images = ["https://mdbootstrap.com/img/Photos/Others/img (50).jpg",
  //   "https://mdbootstrap.com/img/Photos/Others/img (50).jpg",
  //   "https://mdbootstrap.com/img/Photos/Others/img (50).jpg"]
  path:string = null;
  navbarPartnerProgram:boolean = false;
  activeSession:boolean;
  constructor( private router: Router, private _publicService: AppPublicService){}
  // Método para validar la ruta de la pagina (url)
  async changeOfRoutes() {
    this.activeSession = true;
    this.path = this.router.url
    if (this.path === '/partnerprogramm' || this.path === '/programa' || this.path === '/puntaje' || this.path === '/merchandising'
        || this.path === '/beneficios' || this.path === '/marketing-tools') {
      await this.validateActiveSession();
      this.navbarPartnerProgram = true;
    } else if ( this.path === '/contacto' ) {
      this.navbarPartnerProgram = false;
      await this.validateActiveSession();
    } else if ( this.path === '/cambioclave' ) {
      this.activeSession = false;
      await this.validateActiveSession();
    } else {
      this.activeSession = false;
    }
  }
  // Método para validar la sessión activa
  async validateActiveSession() {
    let params = { }
    try {
      let serverResponse = await this._publicService.callAPIGatewayMethod( APIGatewayMethods.validateSession, params )
      if ( !serverResponse.hasError() ) {
        // Se obtuvo una sesión activa
      } else {
        // No se obtuvo una sesión activa
        this.router.navigate(['/'])
      }
    } catch ( e ) {
      alert( "Error serverResponse ")
    }
  }

  ngOnInit() { }
}
