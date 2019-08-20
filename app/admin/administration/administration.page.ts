import { Component, OnInit } from '@angular/core';
import { Point, Parcours, DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.page.html',
  styleUrls: ['./administration.page.scss'],
})
export class AdministrationPage implements OnInit {

  points: Observable<Point[]>;
  parcours: Observable<Parcours[]>;

  constructor(private serv: DataService) { }

  ngOnInit() {
      this.points = this.serv.getPoints();
      this.parcours = this.serv.getParcours();
  }

  deleteParcours(parc) {
    this.serv.removePoint(parc.id);
  }

  deletePi(pi) {
    this.serv.removePoint(pi.id);
  }


}
