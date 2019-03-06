import { Component, OnInit } from '@angular/core';
import { APIGatewayMethods, AppPublicService } from '../../../services/app-public.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tools',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss']
})
export class PasswordChangeComponent implements OnInit {

  token: string
  userEmail: string
  userPasswordOld:string
  userPasswordNew:string
  registerUserMessage: string
  alert: any = new Object()
  constructor( private _route: ActivatedRoute, private _publicService: AppPublicService ) { }

  ngOnInit() {
    // Se configuran los atributos relacionados con los parámetros de entrada
  }
  async changePassword(){
    this.registerUserMessage = ''
    let params = {
      contactEmail: this.userEmail,
      contactPasswordOld: this.userPasswordOld,
    	contactPasswordNew: this.userPasswordNew
    }
    try {
      let serverResponse = await this._publicService.callAPIGatewayMethod( APIGatewayMethods.changeUserPassword, params )
      if ( !serverResponse.hasError() ) {
        // Se registró satisfactoriamente, se limpia la pantalla
        this.registerUserMessage = serverResponse.getMessage()
        this.alert.type = 'success'
        this.userEmail = ''
        this.userPasswordOld = ''
        this.userPasswordNew = ''
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
