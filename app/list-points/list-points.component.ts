import { Component, OnInit } from '@angular/core';
import { Point, DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-list-points',
  templateUrl: './list-points.component.html',
  styleUrls: ['./list-points.component.scss'],
})
export class ListPointsComponent implements OnInit {

  points: Observable<Point[]>;

  constructor(private serv: DataService, private modalController: ModalController) { }

  ngOnInit() {
    this.points = this.serv.getPoints();
  }

  selectPoint(point: Point): void {
    this.modalController.dismiss(point);
  }
}
