import { Component, OnInit } from '@angular/core';
import { Point, DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-point',
  templateUrl: './create-point.page.html',
  styleUrls: ['./create-point.page.scss'],
})
export class CreatePointPage implements OnInit {

  point: Point;

  constructor(
    private serv: DataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.point = this.serv.getPoint(id);
    } else {
      this.point = {
        description: '',
        title: ''
      };
    }
  }

  addPoint() {
    this.serv.addPoint(this.point).then(() => {
      this.router.navigateByUrl('/administration');
    }, err => {
      console.log('Error creation point');
    });
  }

  deletePoint() {
    this.serv.removePoint(this.point.id).then(() => {
      this.router.navigateByUrl('/administration');
    }, err => {
      console.log('Error delete point');
    });
  }

  updatePoint() {
    this.serv.updatePoint(this.point).then(() => {
      this.router.navigateByUrl('/administration');
    }, err => {
      console.log('Error update point');
    });
  }

}
