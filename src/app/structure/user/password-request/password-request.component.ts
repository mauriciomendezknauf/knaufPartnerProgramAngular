import { Component, OnInit } from '@angular/core';
import { APIGatewayMethods, AppPublicService } from '../../../services/app-public.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-password-request',
  templateUrl: './password-request.component.html',
  styleUrls: ['./password-request.component.scss']
})
export class PasswordRequestComponent implements OnInit {

  token: string
  userEmail: string
  userPassword:string
  userPassword2:string
  registerUserMessage: string
  alert: any = new Object()
  constructor( private _route: ActivatedRoute, private _publicService: AppPublicService ) { }

  ngOnInit() {
    // Se configuran los atributos relacionados con los parámetros de entrada
    this._route.params.subscribe( params => {
      this.token = params['token'];
    });
  }
  async requestPassword(){
    this.registerUserMessage = ''
    let params = {
      token: this.token,
      contactEmail: this.userEmail,
    	contactPassword: this.userPassword
    }
    try {
      let serverResponse = await this._publicService.callAPIGatewayMethod( APIGatewayMethods.requestUserPassword, params )
      if ( !serverResponse.hasError() ) {
        // Se registró satisfactoriamente, se limpia la pantalla
        this.registerUserMessage = serverResponse.getMessage()
        this.alert.type = 'success'
        this.userEmail = ''
        this.userPassword = ''
      } else {
        this.registerUserMessage = serverResponse.getErrorMessage()
        this.alert.type = 'danger'
      }
      this.alert.message = this.registerUserMessage
    } catch ( e ) {
      alert( "Error serverResponse ")
    }
  }
 

}
