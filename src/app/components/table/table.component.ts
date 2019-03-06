import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  tableScore = [];
  constructor() { }

  ngOnInit() {
    this.tableScore = [
      {
        tableColumns: [
          {
            fieldName: 'CONDICIONES BASICAS'
          },
          {
            fieldName: '*'
          }
        ],
        tableRecords: [
          {
            recordData: "Presencia de la marca (aviso) en el punto de venta"
          },
          {
            recordData:"Placa y masilla en un lugar visible"
          },
          {
            recordData:"Muestras y maquetas"
          },
          {
            recordData:"Folletos, catálogos y flyers en exhibidor"
          },
          {
            recordData:"Iniciativa propia de publicidad de la marca Knauf"
          }
        ]
      },
      {
        tableColumns: [
          {
            fieldName: 'CONDICIONES ESPECIALES'
          },
          {
            fieldName: '17 PUNTOS'
          }
        ],
        tableRecords: [
          {
            recordData: "Participación y asistencia (cronograma técnico establecido)"
          },
          {
            recordData:"Participación y asistencia en el centro de entrenamiento"
          },
          {
            recordData:"Propuesta por el punto de venta"
          },
          {
            recordData:"Un seminario"
          },
          {
            recordData:"Dos o más seminarios"
          }
        ]
      },
      {
        tableColumns: [
          {
            fieldName: 'CONDICIONES ESPECIFICAS'
          },
          {
            fieldName: '83 PUNTOS'
          }
        ],
        tableRecords: [
          {
            recordData: "Portafolio de productos"
          },
          {
            recordData:"Cartera"
          },
          {
            recordData:"Logística"
          },
          {
            recordData:"Promotor de la marca"
          },
          {
            recordData:"Formación y entretenimiento"
          }
        ]
      }
    ]
  }

}
