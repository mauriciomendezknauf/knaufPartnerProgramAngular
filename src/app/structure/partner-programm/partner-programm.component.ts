import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-partner-programm',
  templateUrl: './partner-programm.component.html',
  styleUrls: ['./partner-programm.component.scss']
})
export class PartnerProgrammComponent implements OnInit {
  bullet:string = null;
  constructor( private route: ActivatedRoute) {
    this.route.params.subscribe(res => console.log(res.id));
   }
  ngOnInit() {
    this.bullet = 'https://www.knauf.com.ar/themes/bootstrap/img/bullet_footer.png';
  }

}
