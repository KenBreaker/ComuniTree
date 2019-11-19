import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ArbolPage } from '../arbol/arbol';
import { LoginPage } from '../login/login';
import { RegistroPage } from '../registro/registro';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(private navCtrl: NavController) {

  }
  openarbol(){
    this.navCtrl.push( ArbolPage );
  }
  openLogin(){
    this.navCtrl.push(LoginPage);
  }
  openRegistro(){
    this.navCtrl.push(RegistroPage);
  }

}
