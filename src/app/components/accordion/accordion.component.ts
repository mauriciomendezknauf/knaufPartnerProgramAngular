import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  bullet:string = null;
  constructor() { }

  ngOnInit() {
    this.bullet = 'https://www.knauf.com.ar/themes/bootstrap/img/bullet_footer.png';
  }

}
