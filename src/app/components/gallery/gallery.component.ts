import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

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
    .icon-circle[_ngcontent-c9] {
      color: #00aef6;
      padding: 6px 4px;
      width: 27px;
      text-align: center;
    }
    .benefits p {
      color: #6d6e70;
      text-align: justify;
    }
    .benefits li {
      color: #6d6e70;
      text-align: justify;
    }
    .blue-text {
      color: #00aef6 !important;
    }
    .img-responsive {
        display: block;
        max-width: 100%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
    }
  `],
  template: `
    <div class="modal-header">
      <h4 class="modal-title"><i class="fa {{icon}} icon-circle"></i> {{title}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div class="benefits">
        <p> {{body}} </p>
        <div *ngIf="titleList">
          <b><p> {{titleList}} </p></b>
          <ul>
            <li> {{bodyList}} </li>
          </ul>
         <p> {{restrictions}} </p>
        </div>
        <div *ngIf="image">
          <img style="float:center; padding:15px" class="img-responsive" src="{{image}}" alt="{{title}}">
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn color-primary" (click)="activeModal.close('Close click')">Cerrar</button>
    </div>
  `
})
export class NgbdModalContentSimple {
  @Input() icon;
  @Input() title;
  @Input() image;
  @Input() body;
  @Input() titleList;
  @Input() bodyList;
  @Input() restrictions;
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  title:string = null;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  modalLogistics() {
    const modalRef = this.modalService.open(NgbdModalContentSimple );
    modalRef.componentInstance.title = 'LOGISTICA';
    modalRef.componentInstance.body = 'Entregas priorizadas, servicios especiales en consolidación de la carga y novedades en pedidos programados.';
    modalRef.componentInstance.icon = 'fa-truck ';
  }
  modalTraining() {
    const modalRef = this.modalService.open(NgbdModalContentSimple );
    modalRef.componentInstance.title = 'ENTRENAMIENTO';
    modalRef.componentInstance.body = 'Entrenamientos exclusivos del portafolio de productos.';
    modalRef.componentInstance.icon = 'fa-mortar-board ';
  }
  modalExcursion() {
    const modalRef = this.modalService.open(NgbdModalContentSimple, { size: 'lg'});
    modalRef.componentInstance.title = 'EXCURSIÓN EDUCATIVA';
    modalRef.componentInstance.body = 'Los distribuidores que obtengan el status Partner Knauf tendrán la oportunidad de profundizar sus conocimientos sobre los procesos de producción y comercialización de Knauf en el país, mediante la experiencia personal y un contacto de primera mano.';
    modalRef.componentInstance.image = 'assets/beneficios/Excursiones_nacionales.jpg';
    modalRef.componentInstance.titleList = 'Estos beneficios incluyen:';
    modalRef.componentInstance.bodyList = 'Invitación a visitar las plantas de Knauf en Bogotá, Cartagena y/o Barranquilla. Incluye tiquetes, almuerzo y traslado dentro de la ciudad y programa de capacitación.';
    modalRef.componentInstance.restrictions = '* (Aplican términos y condiciones. La cantidad de personas a viajar será determinada por Knauf. Se comunicará el calendario asignado para dichos viajes)';
    modalRef.componentInstance.icon = 'fa-plane ';
  }
  modalNetwork() {
    const modalRef = this.modalService.open(NgbdModalContentSimple, { size: 'lg'} );
    modalRef.componentInstance.title = 'EVENTO DE LA RED';
    modalRef.componentInstance.body = 'Se busca brindar un panorama más completo del aspecto corporativo de Knauf a través de experiencias de primera mano con obras de envergadura y una visión abarcativa de la presencia y actividad productiva de Knauf en el exterior del país. Dependiendo de ciertas condiciones, el Partner Knauf podrá disfrutar de un viaje a la sede principal de Knauf en Alemania.';
    modalRef.componentInstance.image = 'assets/beneficios/Excursiones_internacionales.jpg';
    modalRef.componentInstance.titleList = 'Este beneficio incluye:';
    modalRef.componentInstance.bodyList = 'Visita a plantas de la compañía en el exterior, 100% cubierto por Knauf. Podrá incluir visitas a ferias y obras, según disponibilidad*.';
    modalRef.componentInstance.restrictions = '* Se determinará una persona beneficiada por Distribuidor. No incluye gastos personales.';
    modalRef.componentInstance.icon = 'fa-globe ';
  }

}

