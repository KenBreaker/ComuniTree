import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Button } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { ProArbolesProvider } from '../../providers/pro-arboles/pro-arboles';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import { stringify } from '@angular/core/src/util';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { HomePage } from '../home/home';

/**
 * Generated class for the ArbolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-arbol',
  templateUrl: 'arbol.html',
})
export class ArbolPage {
  //coordenadas
  public lat:any;
  public lon:any;
  //arbol
  public nombre:any;
  public nombrecientifico:any;
  public descripcion:any;
  public familia:any;
  public orden:any;
  public clase:any;
  public subclase:any;
  public origen:any;
  public preservacion:any;
  public colorcorteza:any;
  //arbol general
  public descripciongeneral:any;
  public tamano:any;
  public circunferencia:any;
  public fecha:any;
  //imagen
  public fotografia :any;

  constructor(
    public navCtrl: NavController, 
    public camera: Camera, 
    public geo: Geolocation,
    public proveedor:ProArbolesProvider,
    public http: HttpClient,
    private alertCtrl: AlertController,
    private androidPermissions: AndroidPermissions) {

  }
  
  

  ionViewDidLoad() {
    this.mylocation();
    console.log('ionViewDidLoad ArbolPage');
  }


  mylocation(){
    var option = {
      maximumAge: 0,
      timeout: 5000,
      enableHighAccuracy: true
    };
    
    console.log("inicio geolo");
    this.geo.getCurrentPosition(option).then( (pos) => {
      this.lat = pos.coords.latitude;
      this.lon = pos.coords.longitude;
      console.log("position"+this.lat+"  "+this.lon);
    }

    ).catch( (err) => {
      console.error("hola");
      console.error(err);
      alertgps.present();
    });

    //alerta de gps
    let alertgps = this.alertCtrl.create({
      title: 'Error de GPS',
      subTitle: 'No se pudo detectar su ubicación',
      buttons: [{
        text: 'Dar permisos',
        handler: () =>{
          //dar permisos
          
          this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.geolocation, this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION, this.androidPermissions.PERMISSION.LOCATION_HARDWARE]);
          console.log("permisos");
        }
      },
      {
        text: 'Cancelar',
        handler: () => {
          //cancelar
        }
      }
      ]
    });
    //fin alerta gps

    
  }

  sacarfoto(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetHeight: 1000,
      targetWidth: 1000,
      quality: 100
    }

    this.camera.getPicture(options).
    then(imageData => {
     this.fotografia = 'data:image/jpeg;base64,' + imageData;
    }).catch(error =>{
      console.error(error);
    });

    
  }
  
  subir(){
    var fechatemp:any;
    fechatemp = this.fecha.charAt(8)
    +this.fecha.charAt(9)
    +"/"
    +this.fecha.charAt(5)
    +this.fecha.charAt(6)
    +"/"
    +this.fecha.charAt(0)
    +this.fecha.charAt(1)
    +this.fecha.charAt(2)
    +this.fecha.charAt(3);

    console.log(this.fecha);
    console.log(fechatemp);
    console.log(this.fotografia);
    let datos = {
      type_id:'2', 
      description: this.descripcion,
      lon: this.lon,
      lat: this.lat,
      size: this.tamano,
      grounded: fechatemp,
      circumference: this.circunferencia,
      image: this.fotografia
      //hazard: ['1','2']
    }

/*
    var data ={
      json: JSON.stringify(json),
    }
*/
    var url;
    if(this.proveedor.opcion==false){
      url = this.proveedor.apiUrl;

    }else{
      url = this.proveedor.apiUrl80;
    }
    var res = '';
    console.log(datos);
    this.proveedor.addTree(datos).subscribe(data => {
			res = data;
			console.log(res);
		});
    /*
    console.log(this.proveedor.apiUrl+'/agregar/');
    
    $.ajax({
      url: url+'/agregar/',
      type: 'post',
      dataType: 'json',
      data: datos,
      // contentType: 'application/json', <-- no need this.
      success: function(json) {
        if (json) {
            alert('Árbol agregado');
        } else {
            alert('failed');
        }
      },
    });
  */

  }

}
