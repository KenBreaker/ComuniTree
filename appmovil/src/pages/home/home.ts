import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, App , Events, Toggle } from 'ionic-angular';
import { ArbolPage } from '../arbol/arbol'
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapOptions, Marker, GoogleMapsMapTypeId, Environment, GoogleMapsEvent, MarkerOptions, LatLng } from '@ionic-native/google-maps';
import { HttpClient } from '@angular/common/http';
import { ProArbolesProvider } from '../../providers/pro-arboles/pro-arboles';
import { hostViewClassName, analyzeAndValidateNgModules } from '@angular/compiler';
import * as $ from 'jquery';
import { MapsProvider } from './../../providers/maps/maps';
import { JsMapsProvider } from '../../providers/js-maps/js-maps';
import { NativeMapsProvider } from '../../providers/native-maps/native-maps';
import { TabsPage } from '../tabs/tabs';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage
{
  
  map: any;
  tree: any;
  constructor(
    public mapsProvider: MapsProvider,
    public navCtrl: NavController,
    private geolocation: Geolocation,
    public http: HttpClient,
    public proveedor: ProArbolesProvider,
    public nativeMap: NativeMapsProvider,
    public jsMap: JsMapsProvider,
    public events: Events,
    public appCtrl: App){
      this.loadmaps();
  }
  location:{
    latitude:number,
    longitude:number
  };

  @ViewChild('map') mapElement: ElementRef;
  
  openarbol(){
    this.navCtrl.push( ArbolPage );
  }

  async ionViewDidLoad(){

  }


  public arboles: any;

  loadmaps(){
    let option = {//opciones no aplicadas en getCurrentPosition
      maximumAge: 0,
      timeout: 5000,
      enableHighAccuracy: true
    };
    


    this.geolocation.getCurrentPosition(option).then((position)=>{
      this.location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };

      this.mapsProvider.init(this.location,this.mapElement);

    }).catch((error)=>{
      console.log('error getting location', error);
    });
    
  }

  recargar(){
    this.appCtrl.getRootNav().setRoot(HomePage);
    window.location.reload();
  }
  recargarPag(){
    this.navCtrl.push(TabsPage);
  }

  }
