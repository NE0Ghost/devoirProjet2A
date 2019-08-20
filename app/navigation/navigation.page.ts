import { AfterContentInit, Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from './popover/popover.page';
import { Observable } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var google;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})

export class NavigationPage implements OnInit, AfterViewInit {
  currentLocation: any = {
    lat: null,
    lng: null
  }
  map: any;

  @ViewChild('map') mapElement: ElementRef;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  directionForm: FormGroup;
  
  constructor(private fb: FormBuilder, private geolocation: Geolocation, private popoverCtrl: PopoverController) {

  }

  createDirectionForm(){
    this.directionForm = this.fb.group({
      destination: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLocation.lat = resp.coords.latitude;
      this.currentLocation.lng = resp.coords.longitude;
      const map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat: this.currentLocation.lat, lng: this.currentLocation.lng},
        zoom: 6
      });
      this.directionsDisplay.setMap(map);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  calculateAndDisplayRoute(formValues) {
    const that = this;
    this.directionsService.route({
      origin: this.currentLocation,
      destination: formValues.destination,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
      that.directionsDisplay.setDirections(response);
      } else {
        window.alert('Direction request failed due to ' + status);
      }
    });
  }

  ngOnInit() {
  }


  async OpenPopover(ev: Event) {
    const popover = await this.popoverCtrl.create({
        component: PopoverPage,
        componentProps: { },
        event: ev
    });
    popover.present()
  }

}
