import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIGatewayMethods, AppPublicService } from '../../../services/app-public.service';

@Component({
  selector: 'app-tools',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  token: string
  userEmail: string
  userPassword: string
  userPassword2: string
  requestInProgress: boolean = false
  registerUserMessage: string
  patternUser: string
  patternPassword: string
  alert: any = new Object()

  constructor( private _publicService: AppPublicService,
      private _route: ActivatedRoute ) {
    // Se construye el formulario
  }

  ngOnInit() {
    // Se configuran los atributos relacionados con los parámetros de entrada
    this._route.params.subscribe( params => {
      this.token = params['token'];
    });
  }

  readyToBeSent() {
    if ( !this.token || !this.userEmail || !this.userPassword || !this.userPassword2 ) {
      return false;
    }
    else if (this.userPassword && this.userPassword2 && ( this.userPassword != this.userPassword2)) {
      return false;
    }
    return true
  }

  validatePassword(){
    if(this.userPassword != this.userPassword2){

    }
  }

  async activateUser() {
    this.registerUserMessage = ''
    this.requestInProgress = true;
    let requestData = {
    	token: this.token,
    	contactEmail: this.userEmail,
    	contactPassword: this.userPassword
    }
    let result = await this._publicService.callAPIGatewayMethod( APIGatewayMethods.activateUser, requestData );
    if ( !result.hasError() ) {
      // Se registró satisfactoriamente, se limpia la pantalla
      this.registerUserMessage = result.getMessage()
      this.token = ''
    	this.userEmail = ''
      this.userPassword = ''
      this.userPassword2 = ''
      this.alert.type = 'success'
    } else {
      this.registerUserMessage = result.getErrorMessage()
      this.alert.type = 'danger'
    }
    this.alert.message = this.registerUserMessage
    this.requestInProgress = false;
  }
}
