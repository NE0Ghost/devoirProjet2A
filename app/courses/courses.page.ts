import { Component, OnInit } from '@angular/core';
import { Parcours, Point, DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  parcours: Observable<Parcours[]>;

  constructor(private serv: DataService) { }

  ngOnInit() {
    this.parcours = this.serv.getParcours();
  }

  doParcour(p: any) {
    console.log(p.id);
    console.log(p.name);
  }

}
