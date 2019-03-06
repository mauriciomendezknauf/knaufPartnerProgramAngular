import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIGatewayMethods, AppPublicService } from '../../services/app-public.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  alert = Object();
  captcha: boolean = false;
  contactUserResError: string;
  constructor( private router: Router,
    private _publicService: AppPublicService,
    private route: ActivatedRoute ) { }

  resolved(captchaResponse: string) {
    console.log("Resolved captcha with response : " + captchaResponse );
    if (captchaResponse) {
      this.captcha = true;
    }
  }

  ngOnInit() {
    this.alert = {
      type:'danger',
      message: 'Campo requerido',
      invalidMessage: 'Correo invalido'
    }
  }
  async send( data ) {
    this.contactUserResError = ''
    let params = {
      contactName: data.names,
      contactEmail: data.emailAdress,
      contactPhone: data.phone,
      contactCellphone: data.cellphone,
      contactMessage: data.textarea
    }
    try {
      let serverResponse = await this._publicService.callAPIGatewayMethod( APIGatewayMethods.contactRequest, params )
      if ( !serverResponse.hasError() ) {
        // Se registró satisfactoriamente, se limpia la pantalla
        this.contactUserResError = serverResponse.getMessage()
        this.alert.contacType = 'success'
      } else {
        this.contactUserResError = serverResponse.getErrorMessage()
        this.alert.contacType = 'danger'
      }
      this.alert.contactMessage = this.contactUserResError
    } catch ( e ) {
      alert( "Error serverResponse ")
    }
  }

}
