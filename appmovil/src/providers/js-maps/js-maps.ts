import { Injectable } from '@angular/core';
import { HomePage } from '../../pages/home/home';
import { GoogleMaps, LatLng, GoogleMapsEvent, GoogleMapsMapTypeId, Marker, CameraPosition, ILatLng } from '@ionic-native/google-maps';
import { HttpClient } from '@angular/common/http';
import { ProArbolesProvider } from '../../providers/pro-arboles/pro-arboles';

declare var google;
@Injectable()
export class JsMapsProvider {

  arbol: any;
  map: any;
  public arboles: any;

  constructor(
    public proveedor: ProArbolesProvider
  ) {
  }
 
  init(location, element){
    let latLng = new google.maps.LatLng(location.latitude, location.longitude);
 
    let opts = {
      center: latLng,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    this.map = new google.maps.Map(element.nativeElement, opts);


    this.CargaCompleta();

  }

  addMarker(position, title){
    new google.maps.Marker({
      title: title,
      position: position,
      map: this.map
    });
  }
  
  

  CargarDatos(){
    console.log("cargando datos");
    this.proveedor.obtenerarbol().subscribe(
      data => {
        this.arboles =data.data;
      });
    console.log("datos cargados");
  }

  CargarArboles(){
      for(let arbol of this.arboles){
        let latLng = new LatLng(parseFloat(arbol.lat), parseFloat(arbol.lon));
        this.addMarker(latLng, String(arbol.id));
      }
  }

  CargaCompleta(){
    var that = this;
    this.CargarDatos();
    setTimeout(function(){
      that.CargarArboles();
    },5000);
  }

}