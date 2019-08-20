import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private nav: NavController, private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  goToContacts() {
      this.nav.navigateForward('/contacts');
      this.closePopover();
  }

  goToAboutUs() {
      this.nav.navigateForward('/about-us');
      this.closePopover();
  }

  closePopover() {
      this.popoverCtrl.dismiss();
  }
}
