import { Component, ViewChild, OnInit } from '@angular/core';
declare var google;

import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the GoogleMapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent implements OnInit{
  constructor(
    private geolocation: Geolocation
  ) {
  }

  ngOnInit(){
    this.loadMap();
  }
  async loadMap() {
    const rta = await this.geolocation.getCurrentPosition();

    const myLatLng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    console.log(myLatLng);
    const mapEle: HTMLElement = document.getElementById('map');
    const map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  }

}
