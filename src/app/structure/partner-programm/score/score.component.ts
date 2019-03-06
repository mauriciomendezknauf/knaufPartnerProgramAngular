import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  styles: [`
    .color-primary {
      background-color: #00aef6;
      color: #ffffff;
    }
    h4 {
      color: #00aef6;
    }
    `],
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{title}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body col-md-12">
      <div class="table-responsive">
        <table class="table table-sm" *ngFor="let table of tables">
          <thead class="color-primary">
            <tr>
              <th class="table-active" colspan={{tableColumn.span}} scope="col" *ngFor="let tableColumn of table.tableColumns">
                {{ tableColumn.fieldName }}
              </th>
            </tr>
            <tr class="table-primary" *ngIf="table.subtitle">
            <th [attr.colspan]="7" scope="col"> {{ table.subtitle }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let record of table.tableRecords">
              <th [attr.rowspan]="record.row" *ngIf="record.group"> {{ record.group }} </th>
              <td  *ngFor="let row of record.rows"> {{ row.recordData }} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-md color-primary" (click)="activeModal.close('Close click')">Cerrar</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;
  @Input() title;
  @Input() tables;
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})

export class ScoreComponent implements OnInit {
  tablesScore = new Array;
  tableBasicConditions= new Array;
  tableSpecialsConditions= new Array;
  tableSpecificsConditions= new Array;
  tableProductsSpecificsConditions= new Array;
  constructor(private modalService: NgbModal) {}
  closeResult: string;
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
    // Tabla de Condiciones Basicas
    this.tableBasicConditions = [
      {
        subtitle: 'Cumplir mínimo con tres (3) ítems',
        tableColumns: [ {
            fieldName: '1. Presencia de la marca Knauf en el punto de venta' }],
        tableRecords: [{
          group: '',
          rows: [{recordData: "Aviso Knauf  (ubicado en un lugar visible)"}]},{group: '',
          rows: [{recordData: "Placa y masilla con la cinta en lugar visible"}]},{group: '',
          rows: [{recordData: "Banners / rompe tráfico"}]},{group: '',
          rows: [{recordData: "Muestras / Maquetas"}]},{group: '',
          rows: [{recordData: "Tome uno"}]},{group: '',
          rows: [{recordData: "Folletos / catálogos actuales flyers"}]},{group: '',
          rows: [{recordData: "Iniciativas propias de publicidad a la marca Knauf"}]}
      ]}
    ]
    // Tabla de Condiciones Especiales
    this.tableSpecialsConditions = [
      {
        tableColumns: [{
            fieldName: '1. Programa de capacitación básica - especializada'}],
        tableRecords: [{
          rows: [{
            recordData: "Participación y asistencia (cronograma técnico)"}]},{
          rows: [{
            recordData: "Centro de entrenamiento - asistencia"}]},{
          rows: [{
            recordData: "Propuesta por punto de venta"}]
        }]
      },
      {
        tableColumns: [{
          fieldName: '2. Capacitaciones '}],
        tableRecords: [
          {
            rows: [{recordData: "Knauf Akademie | capacitación exclusiva virtual "}]
          },
          {
            rows: [{recordData: "Uno o más seminarios"}]
          }
      ]}
    ]

    // Tabla condiciones especificas
    this.tableSpecificsConditions = [
      // Cuadro 1
      {
        tableColumns: [{
            fieldName: '1. Cartera'},{
            fieldName: ' '}],
        tableRecords: [{
            span: 1,
            group: '',
            rows: [{
              recordData: "Cartera máximo a 10 días"},{
              recordData: "6"}]},{
            span: 1,
            group: '',
            rows: [{
              recordData: "Cartera entre 30 días"},{
              recordData: "4"}]}]
      },
      {
        tableColumns: [{
            fieldName: '2. Logística'},{
            fieldName: ' '}],
        tableRecords: [{
            span: 1,
            group: '',
            rows: [{
              recordData: "Disponibilidad de inventarios + 5 productos Knauf"},{
              recordData: "4"}]},{
            span: 1,
            group: '',
            rows: [{
              recordData: "Manejo de 3 grupos de productos"},{
              recordData: "3"}]}]
      },
      {
        tableColumns: [{
            fieldName: '3. Mercadeo | Promotor de marca'},{
            fieldName: ' '}],
        tableRecords: [{
            span: 1,
            group: '',
            rows: [{
              recordData: "Aviso Knauf"},{
              recordData: "2"}]},{
            span: 1,
            group: '',
            rows: [{
              recordData: "Utiliza Maquetas"},{
              recordData: "2"}]},{
            span: 1,
            group: '',
            rows: [{
              recordData: "Utiliza material POP"},{
              recordData: "2"}]},{
            span: 1,
            group: '',
            rows: [{
              recordData: "Manejo de folletería"},{
              recordData: "2"}]}]},{
        tableColumns: [{
            fieldName: '4. Capacitación y formación | Proactiva'},{
            fieldName: ' '}],
        tableRecords: [{
            span: 1,
            group: '',
            rows: [{
              recordData: "Capacitación a sus vendedores nivel básico"},{
              recordData: "2"}]},{
            span: 1,
            group: '',
            rows: [{
              recordData: "Capacita nivel especializado"},{
              recordData: "2"}]},{
            span: 1,
            group: '',
            rows: [{
                recordData: "Capacita a sus clientes a nivel básico"},{
                recordData: "2"}]},{
            span: 1,
            group: '',
            rows: [{
                recordData: "Capacita a sus clientes a nivel especializado"},{
                recordData: "2"}]}]},
    ]
    // Tabla condiciones especificas de Producto
    this.tableProductsSpecificsConditions = [
      // Cuadro 2
      {
        tableColumns: [
          { fieldName: 'Grupo'},
          { fieldName: 'Producto'},
          { fieldName: 'Puntaje máximo'},
          { fieldName: 'Cuota mínima'},
          { fieldName: '5%'},
          { fieldName: '10%'},
          { fieldName: '15%'}
        ],
        subtitle: "Puntuación por grupo de productos",
        tableRecords: [{
            row: "1",
            group: 'Grupo # 1',
            rows: [
              {recordData: "Volumen Placa ST"},
              {recordData: "4"},
              {recordData: "60.000 m2"},
              {recordData: "1"},
              {recordData: "2"},
              {recordData: "4"}
            ]
          },{
            row: "1",
            group: 'Grupo # 2',
            rows: [
              {recordData: "Placa RF"},
              {recordData: "4"},
              {recordData: "2.000 m2"},
              {recordData: "1"},
              {recordData: "2"},
              {recordData: "4"}
            ]
          },{
            row: "3",
            group: 'Grupo # 3',
            rows: [
              {recordData: "Placa RH"},
              {recordData: "4"},
              {recordData: "4.200 m2"},
              {recordData: "1"},
              {recordData: "2"},
              {recordData: "4"}
            ]
          },{
            rows: [
              {recordData: "Placa Sp Glass"},
              {recordData: "4"},
              {recordData: "400 m2"},
              {recordData: "1"},
              {recordData: "2"},
              {recordData: "4"}
            ]
          },{
            rows: [
              {recordData: "Placa Aquapanel"},
              {recordData: "4"},
              {recordData: "1.000 m2"},
              {recordData: "1"},
              {recordData: "2"},
              {recordData: "4"}
            ]
          },{
            row: "3",
            group: 'Grupo # 4',
            rows: [
              {recordData: "Cleaneo"},
              {recordData: "3"},
              {recordData: "100 m2"},
              {recordData: "1"},
              {recordData: "2"},
              {recordData: "3"}
            ]
          },{
            rows: [
              {recordData: "AMF"},
              {recordData: "3"},
              {recordData: "80 m2"},
              {recordData: "1"},
              {recordData: "2"},
              {recordData: "3"}
            ]
          },{
            rows: [
              {recordData: "Heradesign"},
              {recordData: "3"},
              {recordData: "30 m2"},
              {recordData: "1"},
              {recordData: "2"},
              {recordData: "3"}
            ]
          },{
            row: "1",
            group: 'Grupo # 5',
            rows: [
              {recordData: "Fibra de vidrio"},
              {recordData: "3"},
              {recordData: "1.000 m2"},
              {recordData: "1"},
              {recordData: "2"},
              {recordData: "3"}
            ]
          },{
            row: "3",
            group: 'Grupo # 6',
            rows: [
              {recordData: "Readymás"},
              {recordData: "3"},
              {recordData: "36.000 Kg"},
              {recordData: "1"},
              {recordData: "2"},
              {recordData: "3"}
            ]
          },{
            rows: [
              {recordData: "Uniflott"},
              {recordData: "3"},
              {recordData: "1.200 Kg"},
              {recordData: "1"},
              {recordData: "2"},
              {recordData: "3"}
            ]
          },{
            rows: [
              {recordData: "Fugenfüller"},
              {recordData: "3"},
              {recordData: "1.200 Kg"},
              {recordData: "1"},
              {recordData: "2"},
              {recordData: "3"}
            ]
          },{
            row: "1",
            group: 'Grupo # 7',
            rows: [
              {recordData: "Adhesivo Perlfix"},
              {recordData: "3"},
              {recordData: "1.200 Kg"},
              {recordData: "1"},
              {recordData: "2"},
              {recordData: "3"}
            ]
          }
        ]
      },{
      tableColumns: [],
      subtitle: "Puntuación por combos",
      tableRecords: [{
          row: "1",
          group: 'Combo # 1',
          rows: [
            {recordData: "[1] - [2] - [3] - [4] - [5] - [6] - [7]"},
            {recordData: "2"},
            {recordData: "7"},
            {recordData: "SI"}
          ]
        },{
          row: "1",
          group: 'Combo # 2',
          rows: [
            {recordData: "[1] - [2] - [3] - [4] - [5] - [6] - [7]"},
            {recordData: "2"},
            {recordData: "7"},
            {recordData: "SI"}
          ]
        },{
          row: "1",
          group: 'Combo # 3',
          rows: [
            {recordData: "(Masillas) / KS"},
            {recordData: "2"},
            {recordData: "0.8%"},
            {recordData: "SI"}
          ]
        }
      ]
      }
    ]
  }

  openModal1() {
    const modalRef = this.modalService.open(NgbdModalContent, );
    modalRef.componentInstance.title = 'CONDICIONES BÁSICAS';
    modalRef.componentInstance.tables = this.tableBasicConditions
  }
  openModal2() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.title = 'CONDICIONES ESPECIALES';
    modalRef.componentInstance.tables = this.tableSpecialsConditions
  }
  openModal3() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.title = 'CONDICIONES ESPECIFICAS';
    modalRef.componentInstance.tables = this.tableSpecificsConditions
  }
  openModal4() {
    const modalRef = this.modalService.open(NgbdModalContent, { size: 'lg'});
    modalRef.componentInstance.title = 'CONDICIONES ESPECIFICAS';
    modalRef.componentInstance.tables = this.tableProductsSpecificsConditions
  }

}
