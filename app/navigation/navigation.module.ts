import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { NavigationPage } from './navigation.page';

const routes: Routes = [
  {
    path: '',
    component: NavigationPage
  }
];

@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NavigationPage],
  providers: [Geolocation]
})
export class NavigationPageModule {}
