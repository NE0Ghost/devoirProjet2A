import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  password = '';

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  goToAdministration() {
    if (this.password === 'root') {
      this.nav.navigateForward('/administration');
    }
  }
}
