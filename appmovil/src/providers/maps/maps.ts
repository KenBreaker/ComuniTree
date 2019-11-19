import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { JsMapsProvider } from './../js-maps/js-maps';
import { NativeMapsProvider } from './../native-maps/native-maps';
import { GoogleMaps } from '@ionic-native/google-maps';
import { HttpClient } from '@angular/common/http';
import { ProArbolesProvider } from '../../providers/pro-arboles/pro-arboles';
import { AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Injectable()
export class MapsProvider {
 
  map: any;
 
  constructor(
    public nhttp: HTTP,
    public platform: Platform,
    public http: HttpClient, 
    public proveedor: ProArbolesProvider,
    public alertCtrl: AlertController){

    if(this.platform.is('cordova') && 
      (this.platform.is('ios') || this.platform.is('android'))){
        platform.ready().then(()=>{
          this.map = new NativeMapsProvider(GoogleMaps, proveedor, alertCtrl);
          console.log("native");
        });
      
    } else {
      this.map = new JsMapsProvider(proveedor);
      console.log("map JS");
    }

  }
 
  init(location, element){
    this.map.init(location, element);
  }
 
}