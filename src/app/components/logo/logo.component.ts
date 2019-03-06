import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  banner:string = null;
  path:string = null;

  constructor( private route: ActivatedRoute){}

  ngOnInit() {
    this.banner = 'assets/home/Principal_Partner_logo.jpg';
    this.path = this.route.snapshot.url[0].path
    // this.route.params.subscribe( params => {
    //   this.banner = params[0];
    // })
    if (this.path === 'partnerprogramm') {
      this.banner = 'assets/home/Principal_Partner_logo.jpg';
    } else if (this.path === 'programa') {
      this.banner = 'assets/banners/Banner_programa.jpg';
    } else if (this.path === 'puntaje') {
      this.banner = 'assets/banners/Banner_puntuacion.jpg';
    } else if (this.path === 'merchandising') {
      this.banner = 'assets/banners/Banner_merchandising.jpg';
    } else if (this.path === 'beneficios') {
      this.banner = 'assets/banners/Banner_beneficios.jpg';
    } else if (this.path === 'marketing-tools') {
      this.banner = 'assets/banners/Banner_mkt.jpg';
    } else if (this.path === 'contacto'){
      this.banner = 'https://www.knauf.com.ar/uploads/slider_18_normal.jpg'
    }
  }

}
