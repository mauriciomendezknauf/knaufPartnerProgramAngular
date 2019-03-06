import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Rx'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { serviceUrl } from '../app.general';

export const APIGatewayMethods = {
  // Servicios relaciuonados con los procesos de autenticación y manejo de usuarios
  "activateUser": "users/activateUser/",
  "resetUserPassword": "users/resetUserPassword/",
  "changeUserPassword": "users/changeUserPassword/",
  "requestUserPassword": "users/requestUserPassword/",
  "validateUser": "users/validateUser/",
  "validateSession": "session/validateSession/",
  "openSession": "session/openSession/",
  "closeSession": "session/closeSession/",
  "contactRequest": "users/contactRequest"
};

const httpOptions = {
  headers: new HttpHeaders( {
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  }),
  withCredentials: true
};

class RequestError {
  public errorCode: string = '00';
  public errorMessage: string = '';
}

class RequestOutcome {
  public statusCode: string = '';
  public message: string = '';
  constructor() {
  }
}

export class ServerResponse {
  public data: any;
  public outcome: RequestOutcome;
  public error: RequestError;

  constructor( serverResponse: any ) {
    if ( !serverResponse ) {
      return
    }
    // Se recibió alguna clase de respuesta del servicio
    this.data = serverResponse.data ? serverResponse.data : {};
    this.outcome = new RequestOutcome();
    if ( serverResponse.outcome ) {
      this.outcome.statusCode = serverResponse.outcome.statusCode || '';
      this.outcome.message = serverResponse.outcome.message || '';
    }
    this.error = new RequestError();
    if ( serverResponse.error ) {
      this.error.errorCode = serverResponse.error.errorCode || '00';
      this.error.errorMessage = serverResponse.error.errorMessage || this.outcome.message;
    }
    // Se verifica la estructura de serverResponse
    if ( serverResponse && !serverResponse.outcome && !serverResponse.error && !serverResponse.data ) {
      // Aunque se recibió respuesta, no contiene los objetos esperados
      this.outcome.message = 'Respuesta invalida';
      this.error.errorCode = '99';
      this.error.errorMessage = 'La estructura de la respuesta no coincide con la esperada';
    }
  }

  getData() {
    return this.data
  }

  getMessage() {
    return this.outcome.message
  }

  setMessage( message ){
    this.outcome.message = message
  }

  setError( errorCode, errorMessage ) {
    this.error.errorCode = errorCode
    this.error.errorMessage = errorMessage
  }

  getErrorCode( ) {
    return this.error.errorCode
  }

  getErrorMessage( ) {
    return this.error.errorMessage
  }

  hasError() {
    return ( this.error && this.error.errorCode != '00' )
  }
}

@Injectable()
export class AppPublicService {
  private APIGatewayLocation:string;

  constructor( private _httpClient: HttpClient,
      private _router: Router ) {
    this.APIGatewayLocation = serviceUrl;
  }

  // Mecanismo genérico de llamado a servicios públicos
  async callAPIGatewayMethod( serviceMethodURL, requestData: any ): Promise<ServerResponse> {
    let methodResponse : ServerResponse = null
    
    try {
      let methodFullPath = this.APIGatewayLocation + serviceMethodURL
      let requestContent = JSON.stringify( requestData )
      let servicePromise = this._httpClient.post( methodFullPath, requestContent, httpOptions ).toPromise()
      let rawServerResponse:any = await servicePromise
      console.log(" rawServerResponse ---> " + JSON.stringify( rawServerResponse ));
      methodResponse = new ServerResponse( rawServerResponse )
    } catch ( e ) {
      let methodResponse = new ServerResponse( null )
      methodResponse.setError( '99' ,'Error solicitando información al server' );
    }
    return methodResponse;
  }
}
