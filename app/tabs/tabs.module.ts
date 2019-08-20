import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
        {
            path: 'navigation',
            loadChildren: '../navigation/navigation.module#NavigationPageModule'
        },
        {
            path: 'places',
            loadChildren: '../places/places.module#PlacesPageModule'
        },
        {
            path: 'courses',
            loadChildren: '../courses/courses.module#CoursesPageModule'
        },
    ]
  },
  {
      path: '',
      redirectTo: '/tabs/navigation',
      pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
