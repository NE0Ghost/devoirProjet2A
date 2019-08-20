import { Component, OnInit } from '@angular/core';
import { Point, DataService } from '../services/data.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  endroits: Point[];

  constructor(private serv: DataService) { }

  ngOnInit() {
    console.log(this.serv.getPoints());
    this.serv.getPoints().subscribe(points => this.endroits = points);
  }

  goToPi(pi: any) {
    console.log(pi.id);
    console.log(pi.name);
  }

}
