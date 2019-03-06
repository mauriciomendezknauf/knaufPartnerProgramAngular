import { Component, OnInit } from '@angular/core';
import { APIGatewayMethods, AppPublicService } from '../../../services/app-public.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-password-forget',
  templateUrl: './password-forget.component.html',
  styleUrls: ['./password-forget.component.scss']
})
export class PasswordForgetComponent implements OnInit {
  userEmail: string
  registerUserMessage: string
  alert: any = new Object()
  constructor( private _route: ActivatedRoute, private _publicService: AppPublicService ) { }

  ngOnInit() {
    // Se configuran los atributos relacionados con los parámetros de entrada
  }
  async forgetPassword(){
    this.registerUserMessage = ''
    let params = {
      contactEmail: this.userEmail
    }
    try {
      let serverResponse = await this._publicService.callAPIGatewayMethod( APIGatewayMethods.resetUserPassword, params )
      if ( !serverResponse.hasError() ) {
        // Se registró satisfactoriamente, se limpia la pantalla
        this.registerUserMessage = serverResponse.getMessage()
        this.alert.type = 'success'
        this.userEmail = ''
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
