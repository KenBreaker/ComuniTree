import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProArbolesProvider } from '../../providers/pro-arboles/pro-arboles';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  myForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public proveedor: ProArbolesProvider
    ) 
    {
      this.myForm = this.createMyForm();
      this.CargarDatos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  

  saveData(){
    for(let user of this.users){
      if(this.myForm.value.name == user.name){

      }
      console.log(user.name, user.password, user.email, user.username);
    }
    
  }

  public users: any;
  CargarDatos(){
    this.proveedor.obtenerUsuarios().subscribe(
      data => {
        this.users =data;
      });
  }


  createMyForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  

}
