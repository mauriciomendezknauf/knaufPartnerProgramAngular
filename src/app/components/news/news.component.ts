import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsPartnerProgramm = [];
  constructor() { }

  ngOnInit() {
    AOS.init({
      duration: 1000,
    });
    this.newsPartnerProgramm = [
      {
        title:'Portafolio de productos',
        content: 'Comercialización y crecimiento de productos especializados por grupo según su aplicación',
        imagen: 'https://www.knauf.com.ar/images/partner_programm/home_1.jpg',
        link: 'PRODUCTOS'
      },
      {
        title:'Promotor de la marca',
        content: 'Presencia de la marca y actividades de mercadeo en el punto de venta',
        imagen: 'https://www.knauf.com.ar/images/partner_programm/home_2.jpg',
        link: 'MARCA'
      },
      {
        title:'Proactividad',
        content: 'Formación y gestión de oportunidades en proyectos, conocimiento técnico y experiencia',
        imagen: 'https://www.knauf.com.ar/images/partner_programm/home_3.jpg',
        link: 'PROACTIVIDAD'
      }
    ]
  }

}
