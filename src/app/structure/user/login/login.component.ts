import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { APIGatewayMethods, AppPublicService } from '../../../services/app-public.service';

@Component({
  selector: 'app-tools',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  userName:string;
  userPassword:string;
  token:string;
  registerUserResError: string;
  registerUserRes: string;

  constructor(private router: Router,
    private _publicService: AppPublicService,
    private route: ActivatedRoute) { }
  
  // login() {
  //   this.router.navigate(['/partnerprogramm'])
  // }

  async ngOnInit() {
    // Se obtiene el token de la url
    this.route.params.subscribe( params => {
      this.token = params['token']
    });
  }
    async login() {
      this.registerUserResError = ''
      // let params = {
      //   token: "A86467B6C57F756D554C645CD42A798B6656F",
      //   contactEmail: "jonathan.benavides@imix.com.co",
      //   contactPassword: "1234"
      // }
      let params = {
        userLogin: this.userName,
        userPassword: this.userPassword
      }
      try {
        let serverResponse = await this._publicService.callAPIGatewayMethod( APIGatewayMethods.openSession, params )
        if ( !serverResponse.hasError() ) {
          this.router.navigate(['/partnerprogramm'])
          this.token = ''
          this.userName = ''
          this.userPassword = ''
        } else {
          this.registerUserResError = serverResponse.getErrorMessage()
        }
      } catch ( e ) {
        alert( "Error serverResponse ")
      }
  }
}
