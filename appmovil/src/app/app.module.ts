import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ArbolPage } from '../pages/arbol/arbol';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMapComponent } from '../components/google-map/google-map';
import { ProArbolesProvider } from '../providers/pro-arboles/pro-arboles';
import { HttpClientModule } from '@angular/common/http';
import { ArbolPageModule } from '../pages/arbol/arbol.module';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { MapsProvider } from '../providers/maps/maps';
import { JsMapsProvider } from '../providers/js-maps/js-maps';
import { NativeMapsProvider } from '../providers/native-maps/native-maps';
import { GoogleMaps } from '@ionic-native/google-maps';
import { HTTP } from '@ionic-native/http';
import { ReportePage } from '../pages/reporte/reporte';


@NgModule({
  declarations: [
    ReportePage,
    RegistroPage,
    LoginPage,
    MyApp,
    //ArbolPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GoogleMapComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ArbolPageModule,
    IonicModule.forRoot(MyApp, {
      preloadModules:true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ReportePage,
    RegistroPage,
    LoginPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ArbolPage,
  ],
  providers: [
    HTTP,
    GoogleMaps,
    AndroidPermissions,
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProArbolesProvider,
    MapsProvider,
    JsMapsProvider,
    NativeMapsProvider,
  ]
})
export class AppModule {}
