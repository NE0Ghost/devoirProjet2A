import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'popover', loadChildren: './navigation/popover/popover.module#PopoverPageModule' },
  { path: 'about-us', loadChildren: './navigation/popover/about-us/about-us.module#AboutUsPageModule' },
  { path: 'contacts', loadChildren: './navigation/popover/contacts/contacts.module#ContactsPageModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule' },
  { path: 'administration', loadChildren: './admin/administration/administration.module#AdministrationPageModule' },
  { path: 'create-point', loadChildren: './admin/administration/create-point/create-point.module#CreatePointPageModule' },
  { path: 'create-point/:id', loadChildren: './admin/administration/create-point/create-point.module#CreatePointPageModule' },
  { path: 'create-parcours', loadChildren: './admin/administration/create-parcours/create-parcours.module#CreateParcoursPageModule' },
  { path: 'create-parcours/:id', loadChildren: './admin/administration/create-parcours/create-parcours.module#CreateParcoursPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
