import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent implements OnInit {
  mktTools = []
  constructor() { }

  ngOnInit() {
    this.mktTools = [
      {
        title: 'LOGOS',
        images: [
          {
            image: 'https://www.knauf.com.ar/uploads/mktools_122_normal.jpg',
            preview: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/122/inline/1',
            download: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/122',
            name:'Logo Knauf',
            type: 'JPG',
            weight: '166KB'
          },{
            image: 'https://www.knauf.com.ar/uploads/mktools_131_normal.jpg',
            preview: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/131/inline/1',
            download: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/131',
            name:'Logo Knauf AMF',
            type: 'JPG',
            weight: '203KB'
          },{
            image: 'https://www.knauf.com.ar/uploads/mktools_132_normal.jpg',
            preview: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/132/inline/1',
            download: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/132',
            name:'Logo Knauf Aquapanel',
            type: 'JPG',
            weight: '129KB'
          },{
            image: 'https://www.knauf.com.ar/uploads/mktools_133_normal.jpg',
            preview: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/133/inline/1',
            download: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/133',
            name:'Logo Knauf Cleaneo Akustik',
            type: 'JPG',
            weight: '90KB'
          },{
            image: 'https://www.knauf.com.ar/uploads/mktools_139_normal.jpg',
            preview: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/139/inline/1',
            download: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/139',
            name:'Logo Knauf Danoline',
            type: 'JPG',
            weight: '174KB'
          },{
            image: 'https://www.knauf.com.ar/uploads/mktools_140_normal.jpg',
            preview: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/140/inline/1',
            download: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/140',
            name:'Logo Knauf Diamant',
            type: 'JPG',
            weight: '172KB'
          }
        ]
      },
      {
        title: 'IMÁGENES',
        images: [
          {
            image: 'https://www.knauf.com.ar/uploads/mktools_51_normal.jpg',
            preview: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/51/inline/1',
            download: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/51',
            name:'Placa Knauf Estandar PYE',
            content: 'Imagen en alta definición',
            type: 'JPG',
            weight: '405KB'
          },
          {
            image: 'https://www.knauf.com.ar/uploads/mktools_52_normal.jpg',
            preview: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/52/inline/1',
            download: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/52',
            name:'Placa Estandar PYE',
            content: 'Imagen en baja definición',
            type: 'JPG',
            weight: '734KB'
          },
          {
            image: 'https://www.knauf.com.ar/uploads/mktools_53_normal.jpg',
            preview: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/53/inline/1',
            download: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/53',
            name:'Placa Estandar PYE',
            content: 'Imagen en baja definición',
            type: 'JPG',
            weight: '734KB'
          },
          {
            image: 'https://www.knauf.com.ar/uploads/mktools_54_normal.jpg',
            preview: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/54/inline/1',
            download: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/54',
            name:'Placa Estandar PYE',
            content: 'Imagen en baja definición',
            type: 'JPG',
            weight: '734KB'
          },
          {
            image: 'https://www.knauf.com.ar/uploads/mktools_55_normal.jpg',
            preview: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/55/inline/1',
            download: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/55',
            name:'Placa Estandar PYE',
            content: 'Imagen en baja definición',
            type: 'JPG',
            weight: '734KB'
          },
          {
            image: 'https://www.knauf.com.ar/uploads/mktools_56_normal.jpg',
            preview: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/56/inline/1',
            download: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/56',
            name:'Placa Estandar PYE',
            content: 'Imagen en baja definición',
            type: 'JPG',
            weight: '734KB'
          }
        ]
      },
      {
        title: 'BANNERS WEB',
        images: [
          {
            image: 'https://www.knauf.com.ar/uploads/mktools_151_normal.jpg',
            preview: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/151/inline/1',
            download: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/151',
            name:'Banner simple',
            content: 'Imagen a 200 dpi',
            target: 'Web',
            type: 'JPG',
            weight: '734KB'
          },
          {
            image: 'https://www.knauf.com.ar/uploads/mktools_152_normal.jpg',
            preview: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/152/inline/1',
            download: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/152',
            name:'Banner simple con slogan',
            content: 'Imagen a 200 dpi',
            target: 'Web',
            type: 'JPG',
            weight: '78KB'
          },
          {
            image: 'https://www.knauf.com.ar/uploads/mktools_153_normal.jpg',
            preview: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/153/inline/1',
            download: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/153',
            name:'Banner simple con slogan',
            content: 'Imagen a 200 dpi',
            target: 'Web',
            type: 'JPG',
            weight: '78KB'
          },
          {
            image: 'https://www.knauf.com.ar/uploads/mktools_155_normal.jpg',
            preview: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/155/inline/1',
            download: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/155',
            name:'Banner simple con slogan',
            content: 'Imagen a 200 dpi',
            target: 'Web',
            type: 'JPG',
            weight: '78KB'
          },
          {
            image: 'https://www.knauf.com.ar/uploads/mktools_156_normal.jpg',
            preview: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/156/inline/1',
            download: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/156',
            name:'Banner simple con slogan',
            content: 'Imagen a 200 dpi',
            target: 'Web',
            type: 'JPG',
            weight: '78KB'
          },
          {
            image: 'https://www.knauf.com.ar/uploads/mktools_157_normal.jpg',
            preview: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/157/inline/1',
            download: 'https://www.knauf.com.ar/partnerprogramm/mktools/download/id/157',
            name:'Banner simple con slogan',
            content: 'Imagen a 200 dpi',
            target: 'Web',
            type: 'JPG',
            weight: '78KB'
          }
        ]
      },
      {
        title: 'CARTELES',
        images: [
          {
            image: 'assets/mktools/Manual_uso_carteleria.png',
            preview: 'assets/mktools/download/Manual_uso_carteleria.pdf',
            download: 'assets/mktools/download/Manual_uso_carteleria.pdf',
            name:'Manual de Diseño Corporativo para Cartelería',
            content: 'Guía de aplicación y ejemplos de carteles',
            type: 'PDF',
            weight: '1.1MB'
          }
        ]
      },
      {
        title: 'OTROS',
        images: [
          {
            image: 'assets/mktools/Manual_uso_vehiculos.png',
            preview: 'assets/mktools/download/Manual_uso_vehiculos.pdf',
            download: 'assets/mktools/download/Manual_uso_vehiculos.pdf',
            name:'Guía de ejemplos de decoración vehicular para distribuidores',
            content: 'Guía de ejemplos de decoración vehicular para distribuidores',
            type: 'PDF',
            weight: '208KB'
          },
          {
            image: 'assets/mktools/Manual_uso_carteleria.png',
            preview: 'assets/mktools/download/Manual_uso_carteleria.pdf',
            download: 'assets/mktools/download/Manual_uso_carteleria.pdf',
            name:'Manual de Diseño Corporativo para Cartelería',
            content: 'Guía de aplicación y ejemplos de carteles',
            type: 'PDF',
            weight: '1.1MB'
          },
          {
            image: 'assets/mktools/Manual_uso_grafico.png',
            preview: 'assets/mktools/download/Manual_uso_grafico.pdf',
            download: 'assets/mktools/download/Manual_uso_grafico.pdf',
            name:'Manual de Diseño Corporativo para Piezas Gráficas',
            content: 'Manual de marca y guía de imagenes de productos para utilizar',
            type: 'PDF',
            weight: '296KB'
          }
        ]
      },
    ]
  }

}
