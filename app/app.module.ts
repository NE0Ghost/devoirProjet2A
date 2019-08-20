import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PopoverPageModule } from './navigation/popover/popover.module';

import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { ListPointsComponent } from './list-points/list-points.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [AppComponent, ListPointsComponent],
  entryComponents: [ListPointsComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    PopoverPageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // AngularFirestore,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // { provide: AngularFirestore, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
