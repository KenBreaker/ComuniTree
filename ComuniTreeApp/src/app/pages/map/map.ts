import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { Platform } from '@ionic/angular';
import { TreeService } from '../../services/tree.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { map } from 'rxjs/operators';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss']
})
export class MapPage implements AfterViewInit {
  @ViewChild('mapCanvas',{static: false}) mapElement: ElementRef;
  lat_init
  lon_init
  trees
  k = 0
  tree
  dato
  data_final
  constructor(private geolocation: Geolocation,
    private _treeService: TreeService,
    public confData: ConferenceData,
     public platform: Platform) {
      this._treeService.getTrees().subscribe(
        dato => {
          this.trees = dato.data;
          let i = 0
          for(this.tree of this.trees){
            let mapInput = [
              { 
                center: true,
                lat: parseFloat(this.tree.lat),
                lng: parseFloat(this.tree.lon),
                name: 'test'
              }
            ]
            dato[i] = mapInput 
            i = 1 + i
          }
          let data_final = []
          for (this.k=0 ; this.k<i ; this.k++){
              data_final[this.k] = dato[this.k][0]
          }
        }
      );
     }

  updateLocation(){
    this.geolocation.getCurrentPosition(this.options).then(res => {
      this.success(res);
  });
  }
  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  success(pos) {
    var crd = pos.coords;
    this.lat_init = crd.latitude
    this.lon_init = crd.longitude
  }

  async ngAfterViewInit() {
    const googleMaps = await getGoogleMaps(
      'AIzaSyCP7DBdMp0oCsy1i2RCxpwxHUD-EREwnqo'
    );

    
    
    this.confData.getMap().subscribe((mapData: any) => {
      const mapEle = this.mapElement.nativeElement;
      this.updateLocation();
      const map = new googleMaps.Map(mapEle, {
        center: mapData.find((d: any) => d.center),
        zoom: 16
      });

      mapData.forEach((markerData: any) => {
        const infoWindow = new googleMaps.InfoWindow({
          content: `<h5>${markerData.name}</h5>`
        });

        const marker = new googleMaps.Marker({
          position: markerData,
          map,
          title: markerData.name
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });

      googleMaps.event.addListenerOnce(map, 'idle', () => {
        mapEle.classList.add('show-map');
      });
    });
  }
}


function getGoogleMaps(apiKey: string): Promise<any> {
  const win = window as any;
  const googleModule = win.google;
  if (googleModule && googleModule.maps) {
    return Promise.resolve(googleModule.maps);
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      const googleModule2 = win.google;
      if (googleModule2 && googleModule2.maps) {
        resolve(googleModule2.maps);
      } else {
        reject('google maps not available');
      }
    };
  });
}
