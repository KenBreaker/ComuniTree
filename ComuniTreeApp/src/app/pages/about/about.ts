import { Component, ViewEncapsulation } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../about-popover/about-popover';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NgForm} from '@angular/forms';
import { Validators} from '@angular/forms';
import { TreeService } from '../../services/tree.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage {
  profile;
  tree: any;
  displayImage
	add_Tree = {
    type_id:'2',
    lon: '',
    lat: '',
    size: '',
    circumference: '',
    image:'test'
	};
	user = {
		email: '',
		username: ''
  };
  public fotografia :any;
  constructor(private sanitizer: DomSanitizer, private base64: Base64,private androidPermissions: AndroidPermissions,
    private geolocation: Geolocation,
    private _treesService: TreeService, private camera: Camera) {
  }

	submit(form: NgForm): void {
    let res = '';
    console.log(this.add_Tree);
    this._treesService.addTree(this.add_Tree).subscribe(data => {
      res = data;
      console.log(res);
      alert("Árbol Agregado")
    });
	}


  ngAfterViewInit(): void {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      result => console.log('Has permission?',result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    );
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);  
    this.updateLocation();
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
    this.add_Tree.lat = crd.latitude
    this.add_Tree.lon = crd.longitude
  }

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

 
  photo (){
    let options_camera: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight: 1000,
      targetWidth: 1000,
    }
    this.camera.getPicture(options_camera).then((imageData) => {
      var imageData2 = btoa(imageData);
      //console.log("Base64 Image: ",imageData);
      //this.displayImage = this.sanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64,"+imageData);
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      //let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.displayImage = "data:image/jpeg;base64,"+imageData
      this.add_Tree.image = "data:image/jpeg;base64,"+imageData
      /*let filePath: string = imageData;
      this.base64.encodeFile(filePath).then((base64File: string) => {
        this.add_Tree.image = base64File
      }, (err) => {
        console.log(err);
      });*/
     }, (err) => {
        console.log(err)
     });
  }
}
