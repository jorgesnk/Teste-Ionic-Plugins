import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  constructor(private googleMaps: GoogleMaps, public navCtrl: NavController,
    private device: Device) {
  }

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {

    let element: HTMLElement = document.getElementById('map');

    let map: GoogleMap = this.googleMaps.create(element);
    map.one(GoogleMapsEvent.MAP_READY).then(
      () => {
        var pos = new LatLng(43.0741904, -89.3809802);

        map.moveCamera({ target: pos })

        map.addMarker({
          position: pos, title: 'ola',
        })
      }
    );
  }

  teste() {
    alert('TUDO OK');
    console.log('rolou')
  }











}
