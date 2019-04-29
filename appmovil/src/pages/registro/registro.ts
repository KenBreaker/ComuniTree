import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  
  myForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController
    ) 
    {
      this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  saveData(){
    if(this.myForm.value.passwordRetry.password==this.myForm.value.passwordRetry.passwordConfirmation){
      console.log(this.myForm.value);
    }else{
      var alertaContraseña = this.alertCtrl.create({
        title: 'Las contraseñas no coinciden',
        buttons: ['ok']
      });
      console.log("error");
      alertaContraseña.present();
      
    }
  }

  createMyForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      })
    });
  }
}
