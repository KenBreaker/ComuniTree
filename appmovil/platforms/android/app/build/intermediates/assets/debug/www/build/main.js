webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Project\SW2_geoTrees\appmovil\src\pages\tabs\tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Arboles" tabIcon="leaf"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Perfil" tabIcon="contact"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"D:\Project\SW2_geoTrees\appmovil\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/arbol/arbol.module": [
		162
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArbolPageModule", function() { return ArbolPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__arbol__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ArbolPageModule = /** @class */ (function () {
    function ArbolPageModule() {
    }
    ArbolPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__arbol__["a" /* ArbolPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__arbol__["a" /* ArbolPage */]),
            ],
        })
    ], ArbolPageModule);
    return ArbolPageModule;
}());

//# sourceMappingURL=arbol.module.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pro_arboles_pro_arboles__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_native_maps_native_maps__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_js_maps_js_maps__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, proveedor, http, nativeMap, jsMap) {
        this.navCtrl = navCtrl;
        this.proveedor = proveedor;
        this.http = http;
        this.nativeMap = nativeMap;
        this.jsMap = jsMap;
        this.cargando = false;
        this.searchQuery = '';
        this.items = [];
        this.CargarDatos();
        this.searchQuery = '';
    }
    AboutPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        this.proveedor.obtenerarbol().subscribe(function (data) {
            _this.arboles = data.data;
        });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    AboutPage.prototype.irArriba = function () {
        this.content.scrollToTop(500);
    };
    AboutPage.prototype.ionViewDidLoad = function () {
    };
    AboutPage.prototype.initializeItems = function () {
        for (var _i = 0, _a = this.arboles; _i < _a.length; _i++) {
            var arbol = _a[_i];
            this.items[0] = arbol.id;
        }
        console.log(" ARBOLES " + this.arboles);
        var i = 0;
        console.log(this.items[0]);
    };
    AboutPage.prototype.getItems = function (termino) {
        if (termino.length <= 0) {
            this.CargarDatos();
            return;
        }
    };
    AboutPage.prototype.CargarDatos = function () {
        var _this = this;
        this.cargando = true;
        this.proveedor.obtenerarbol().subscribe(function (data) {
            _this.arboles = data.data;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], AboutPage.prototype, "content", void 0);
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\Project\SW2_geoTrees\appmovil\src\pages\about\about.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title id="titleArbol">\n            Arbol\n        </ion-title>\n        <ion-label id="puerto" color="gris">puerto: {{this.proveedor.puerto}}</ion-label>\n    </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content>\n    <ion-fab right bottom>\n        <button ion-fab mini (click)="irArriba()"><ion-icon name="arrow-dropup"></ion-icon></button>\n    </ion-fab>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-searchbar #input (keyup)="getItems( input.value )" type="text" class="form-control" placeholder="Buscar Arbol..."></ion-searchbar>\n\n    <ion-card *ngFor="let arbol of arboles">\n        <div *ngIf="arbol.id == input.value || input.value == \'\'">\n            <img *ngFor="let photo of arbol.photos" src="{{\'http://www.comunitree.tk:8080\' + photo.url}}">\n            <ion-card-content>\n                <ion-card-title padding>\n                    {{arbol._type.name}}\n                </ion-card-title>\n                <ion-list>\n                    <ion-item>\n                        <ion-label>\n\n                            <p>id:{{arbol.id}}</p>\n                            <p>\n                                latitud = {{arbol.lat}}\n                            </p>\n                            <p>\n                                longitud = {{arbol.lon}}\n                            </p>\n                            <p>\n                                size = {{arbol.size}}\n                            </p>\n                            <p>\n                                {{arbol.description}}\n                            </p>\n                        </ion-label>\n                    </ion-item>\n                </ion-list>\n\n            </ion-card-content>\n        </div>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\Project\SW2_geoTrees\appmovil\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_pro_arboles_pro_arboles__["a" /* ProArbolesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__providers_native_maps_native_maps__["a" /* NativeMapsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_js_maps_js_maps__["a" /* JsMapsProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ReportePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportePage = /** @class */ (function () {
    function ReportePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReportePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportePage');
    };
    ReportePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reporte',template:/*ion-inline-start:"D:\Project\SW2_geoTrees\appmovil\src\pages\reporte\reporte.html"*/'<!--\n\n  Generated template for the ReportePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>reporte</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Project\SW2_geoTrees\appmovil\src\pages\reporte\reporte.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ReportePage);
    return ReportePage;
}());

//# sourceMappingURL=reporte.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__arbol_arbol__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registro_registro__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage.prototype.openarbol = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__arbol_arbol__["a" /* ArbolPage */]);
    };
    ContactPage.prototype.openLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    ContactPage.prototype.openRegistro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__registro_registro__["a" /* RegistroPage */]);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\Project\SW2_geoTrees\appmovil\src\pages\contact\contact.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Perfil\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button small (click)="openRegistro()">Registrarse</button>\n        </ion-buttons>\n        <ion-buttons start>\n            <button ion-button small (click)="openLogin()">Iniciar sesion</button>\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-card-content>\n            <ion-item>\n                <ion-label>\n                    Nombre\n                </ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label>\n                    Apellido\n                </ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label>\n                    Email\n                </ion-label>\n            </ion-item>\n            <!-- Add card content here! -->\n        </ion-card-content>\n\n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <ion-label>\n                <button ion-button full color="secondary" icon-start (click)="openarbol()">\n                    Agregar árbol \n                    <ion-icon name="leaf"></ion-icon>\n                </button>\n            </ion-label>\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"D:\Project\SW2_geoTrees\appmovil\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pro_arboles_pro_arboles__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, formBuilder, alertCtrl, proveedor) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.proveedor = proveedor;
        this.myForm = this.createMyForm();
        this.CargarDatos();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.saveData = function () {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (this.myForm.value.name == user.name) {
            }
            console.log(user.name, user.password, user.email, user.username);
        }
    };
    LoginPage.prototype.CargarDatos = function () {
        var _this = this;
        this.proveedor.obtenerUsuarios().subscribe(function (data) {
            _this.users = data;
        });
    };
    LoginPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Project\SW2_geoTrees\appmovil\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>login</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n    <form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-icon name="person" item-start></ion-icon>\n\n                <ion-label stacked>Nombres:</ion-label>\n\n                <ion-input formControlName="name" type="text" placeholder="Nombre"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon name="mail" item-start></ion-icon>\n\n                <ion-label stacked>Correo electronico:</ion-label>\n\n                <ion-input formControlName="email" ngModel type="email" placeholder="Email" required email></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon name="eye" item-start></ion-icon>\n\n                <ion-label stacked>Contraseña:</ion-label>\n\n                <ion-input formControlName="password" type="password" placeholder="Contraseña"></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n\n        <div padding>\n\n            <button ion-button block type="submit" [disabled]="!myForm.valid">Guardar</button>\n\n        </div>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"D:\Project\SW2_geoTrees\appmovil\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_pro_arboles_pro_arboles__["a" /* ProArbolesProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistroPage = /** @class */ (function () {
    function RegistroPage(navCtrl, navParams, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.myForm = this.createMyForm();
    }
    RegistroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistroPage');
    };
    RegistroPage.prototype.saveData = function () {
        if (this.myForm.value.passwordRetry.password == this.myForm.value.passwordRetry.passwordConfirmation) {
            console.log(this.myForm.value);
        }
        else {
            var alertaContraseña = this.alertCtrl.create({
                title: 'Las contraseñas no coinciden',
                buttons: ['ok']
            });
            console.log("error");
            alertaContraseña.present();
        }
    };
    RegistroPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            passwordRetry: this.formBuilder.group({
                password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                passwordConfirmation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
            })
        });
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"D:\Project\SW2_geoTrees\appmovil\src\pages\registro\registro.html"*/'<!--\n\n  Generated template for the RegistroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>registro</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-icon name="person" item-start></ion-icon>\n\n                <ion-label stacked>Nombres:</ion-label>\n\n                <ion-input formControlName="name" type="text" placeholder="Nombre"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon name="mail" item-start></ion-icon>\n\n                <ion-label stacked>Correo electronico:</ion-label>\n\n                <ion-input formControlName="email" ngModel type="email" placeholder="Email" required email></ion-input>\n\n            </ion-item>\n\n            <div formGroupName="passwordRetry">\n\n                <ion-item>\n\n                    <ion-icon name="eye" item-start></ion-icon>\n\n                    <ion-label stacked>Contraseña:</ion-label>\n\n                    <ion-input formControlName="password" type="password" placeholder="Contraseña"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-icon name="eye" item-start></ion-icon>\n\n                    <ion-label stacked>Confirmar contraseña:</ion-label>\n\n                    <ion-input formControlName="passwordConfirmation" type="password" placeholder="Confirmar contraseña"></ion-input>\n\n                </ion-item>\n\n            </div>\n\n        </ion-list>\n\n        <div padding>\n\n            <button ion-button block type="submit" [disabled]="!myForm.valid">Guardar</button>\n\n        </div>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"D:\Project\SW2_geoTrees\appmovil\src\pages\registro\registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__arbol_arbol__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pro_arboles_pro_arboles__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_maps_maps__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_js_maps_js_maps__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_native_maps_native_maps__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tabs_tabs__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var HomePage = /** @class */ (function () {
    function HomePage(mapsProvider, navCtrl, geolocation, http, proveedor, nativeMap, jsMap, events, appCtrl) {
        this.mapsProvider = mapsProvider;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.http = http;
        this.proveedor = proveedor;
        this.nativeMap = nativeMap;
        this.jsMap = jsMap;
        this.events = events;
        this.appCtrl = appCtrl;
        this.loadmaps();
    }
    HomePage_1 = HomePage;
    HomePage.prototype.openarbol = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__arbol_arbol__["a" /* ArbolPage */]);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.loadmaps = function () {
        var _this = this;
        var option = {
            maximumAge: 0,
            timeout: 5000,
            enableHighAccuracy: true
        };
        this.geolocation.getCurrentPosition(option).then(function (position) {
            _this.location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            _this.mapsProvider.init(_this.location, _this.mapElement);
        }).catch(function (error) {
            console.log('error getting location', error);
        });
    };
    HomePage.prototype.recargar = function () {
        this.appCtrl.getRootNav().setRoot(HomePage_1);
        window.location.reload();
    };
    HomePage.prototype.recargarPag = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__tabs_tabs__["a" /* TabsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Project\SW2_geoTrees\appmovil\src\pages\home\home.html"*/'<!--HEADER-->\n<ion-header>\n    <ion-navbar>\n        <ion-title style="float:left">Mapa</ion-title>\n\n\n        <ion-toggle style="float: right" [(ngModel)]="proveedor.opcion"></ion-toggle>\n        <ion-label style="float: right" color="gris">puerto: {{this.proveedor.puerto}}</ion-label>\n        <button small ion-button icon-only style="float: right" (click)="recargarPag()"><ion-icon name="refresh"></ion-icon></button>\n        <button small ion-button icon-only style="float: right" (click)="openarbol()"><ion-icon name="leaf"></ion-icon></button>\n\n    </ion-navbar>\n</ion-header>\n<!--CONTENIDO-->\n\n<ion-content>\n    <!--ion-fab top center edge>\n        <button ion-fab mini color="secondary">\n            <ion-icon name="leaf"></ion-icon>\n        </button>\n        <ion-fab-list>\n            <button ion-fab (click)="openarbol()"><ion-icon name="leaf"></ion-icon></button>\n            <button ion-fab (click)="recargar()"><ion-icon name="refresh"></ion-icon></button>\n        </ion-fab-list>\n    </ion-fab-->\n\n    <div #map id="map"></div>\n</ion-content>\n\n<!--FOOTER-->\n\n<ion-footer>\n\n\n</ion-footer>'/*ion-inline-end:"D:\Project\SW2_geoTrees\appmovil\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_maps_maps__["a" /* MapsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__providers_pro_arboles_pro_arboles__["a" /* ProArbolesProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_native_maps_native_maps__["a" /* NativeMapsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_js_maps_js_maps__["a" /* JsMapsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_maps_js_maps__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__native_maps_native_maps__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_pro_arboles_pro_arboles__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_http__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MapsProvider = /** @class */ (function () {
    function MapsProvider(nhttp, platform, http, proveedor, alertCtrl) {
        var _this = this;
        this.nhttp = nhttp;
        this.platform = platform;
        this.http = http;
        this.proveedor = proveedor;
        this.alertCtrl = alertCtrl;
        if (this.platform.is('cordova') &&
            (this.platform.is('ios') || this.platform.is('android'))) {
            platform.ready().then(function () {
                _this.map = new __WEBPACK_IMPORTED_MODULE_3__native_maps_native_maps__["a" /* NativeMapsProvider */](__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* GoogleMaps */], proveedor, alertCtrl);
                console.log("native");
            });
        }
        else {
            this.map = new __WEBPACK_IMPORTED_MODULE_2__js_maps_js_maps__["a" /* JsMapsProvider */](proveedor);
            console.log("map JS");
        }
    }
    MapsProvider.prototype.init = function (location, element) {
        this.map.init(location, element);
    };
    MapsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__providers_pro_arboles_pro_arboles__["a" /* ProArbolesProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */]])
    ], MapsProvider);
    return MapsProvider;
}());

//# sourceMappingURL=maps.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_arbol_arbol__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_registro_registro__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_google_map_google_map__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_pro_arboles_pro_arboles__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_arbol_arbol_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_android_permissions__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_maps_maps__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_js_maps_js_maps__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_native_maps_native_maps__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_google_maps__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_http__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_reporte_reporte__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_25__pages_reporte_reporte__["a" /* ReportePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                //ArbolPage,
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__components_google_map_google_map__["a" /* GoogleMapComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18__pages_arbol_arbol_module__["ArbolPageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    preloadModules: true
                }, {
                    links: [
                        { loadChildren: '../pages/arbol/arbol.module#ArbolPageModule', name: 'ArbolPage', segment: 'arbol', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_25__pages_reporte_reporte__["a" /* ReportePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_arbol_arbol__["a" /* ArbolPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_pro_arboles_pro_arboles__["a" /* ProArbolesProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_maps_maps__["a" /* MapsProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_js_maps_js_maps__["a" /* JsMapsProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_native_maps_native_maps__["a" /* NativeMapsProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProArbolesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProArbolesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProArbolesProvider = /** @class */ (function () {
    function ProArbolesProvider(http) {
        this.http = http;
        this.apiUrl = 'http://www.comunitree.tk:8081/arbol';
        this.apiUrl80 = 'http://www.comunitree.tk:8080/arbol';
        this.urlv1 = 'http://www.comunitree.tk:8080/api/v1';
        console.log('Hello ProArbolesProvider Provider');
    }
    ProArbolesProvider.prototype.obtenerarbol = function () {
        if (this.opcion == false) {
            this.puerto = "8081";
            return this.http.get(this.apiUrl + '/all/');
        }
        else if (this.opcion == true) {
            this.puerto = "8080";
            return this.http.get(this.apiUrl80 + '/all/');
        }
        else {
            this.puerto = "8081";
            return this.http.get(this.apiUrl + '/all/');
        }
    };
    ProArbolesProvider.prototype.obtenerUsuarios = function () {
        return this.http.get(this.urlv1 + '/users/');
    };
    ProArbolesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProArbolesProvider);
    return ProArbolesProvider;
}());

//# sourceMappingURL=pro-arboles.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Project\SW2_geoTrees\appmovil\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"D:\Project\SW2_geoTrees\appmovil\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/**
 * Generated class for the GoogleMapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var GoogleMapComponent = /** @class */ (function () {
    function GoogleMapComponent(geolocation) {
        this.geolocation = geolocation;
    }
    GoogleMapComponent.prototype.ngOnInit = function () {
        this.loadMap();
    };
    GoogleMapComponent.prototype.loadMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rta, myLatLng, mapEle, map;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.geolocation.getCurrentPosition()];
                    case 1:
                        rta = _a.sent();
                        myLatLng = {
                            lat: rta.coords.latitude,
                            lng: rta.coords.longitude
                        };
                        console.log(myLatLng);
                        mapEle = document.getElementById('map');
                        map = new google.maps.Map(mapEle, {
                            center: myLatLng,
                            zoom: 12
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    GoogleMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'google-map',template:/*ion-inline-start:"D:\Project\SW2_geoTrees\appmovil\src\components\google-map\google-map.html"*/'<div #map id="map"></div>'/*ion-inline-end:"D:\Project\SW2_geoTrees\appmovil\src\components\google-map\google-map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());

//# sourceMappingURL=google-map.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArbolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pro_arboles_pro_arboles__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ArbolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArbolPage = /** @class */ (function () {
    function ArbolPage(navCtrl, camera, geo, proveedor, http, alertCtrl, androidPermissions) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.geo = geo;
        this.proveedor = proveedor;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.androidPermissions = androidPermissions;
    }
    ArbolPage.prototype.ionViewDidLoad = function () {
        this.mylocation();
        console.log('ionViewDidLoad ArbolPage');
    };
    ArbolPage.prototype.mylocation = function () {
        var _this = this;
        var option = {
            maximumAge: 0,
            timeout: 5000,
            enableHighAccuracy: true
        };
        console.log("inicio geolo");
        this.geo.getCurrentPosition(option).then(function (pos) {
            _this.lat = pos.coords.latitude;
            _this.lon = pos.coords.longitude;
            console.log("position" + _this.lat + "  " + _this.lon);
        }).catch(function (err) {
            console.error("hola");
            console.error(err);
            alertgps.present();
        });
        //alerta de gps
        var alertgps = this.alertCtrl.create({
            title: 'Error de GPS',
            subTitle: 'No se pudo detectar su ubicación',
            buttons: [{
                    text: 'Dar permisos',
                    handler: function () {
                        //dar permisos
                        _this.androidPermissions.requestPermissions([_this.androidPermissions.PERMISSION.geolocation, _this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION, _this.androidPermissions.PERMISSION.LOCATION_HARDWARE]);
                        console.log("permisos");
                    }
                },
                {
                    text: 'Cancelar',
                    handler: function () {
                        //cancelar
                    }
                }
            ]
        });
        //fin alerta gps
    };
    ArbolPage.prototype.sacarfoto = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetHeight: 1000,
            targetWidth: 1000,
            quality: 100
        };
        this.camera.getPicture(options).
            then(function (imageData) {
            _this.fotografia = 'data:image/jpeg;base64,' + imageData;
        }).catch(function (error) {
            console.error(error);
        });
    };
    ArbolPage.prototype.subir = function () {
        var fechatemp;
        fechatemp = this.fecha.charAt(8)
            + this.fecha.charAt(9)
            + "/"
            + this.fecha.charAt(5)
            + this.fecha.charAt(6)
            + "/"
            + this.fecha.charAt(0)
            + this.fecha.charAt(1)
            + this.fecha.charAt(2)
            + this.fecha.charAt(3);
        console.log(this.fecha);
        console.log(fechatemp);
        var datos = {
            type_id: '1',
            description: this.descripcion,
            lon: this.lon,
            lat: this.lat,
            size: this.tamano,
            grounded: fechatemp,
            circumference: this.circunferencia
            //hazard: ['1','2']
        };
        /*
            var data ={
              json: JSON.stringify(json),
            }
        */
        var url;
        if (this.proveedor.opcion == false) {
            url = this.proveedor.apiUrl;
        }
        else {
            url = this.proveedor.apiUrl80;
        }
        console.log(this.proveedor.apiUrl + '/agregar/');
        __WEBPACK_IMPORTED_MODULE_6_jquery__["ajax"]({
            url: url + '/agregar/',
            type: 'post',
            dataType: 'json',
            data: datos,
            // contentType: 'application/json', <-- no need this.
            success: function (json) {
                if (json) {
                    alert('Árbol agregado');
                }
                else {
                    alert('failed');
                }
            },
        });
    };
    ArbolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-arbol',template:/*ion-inline-start:"D:\Project\SW2_geoTrees\appmovil\src\pages\arbol\arbol.html"*/'<!--\n\n  Generated template for the ArbolPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title style="float:left">Árbol</ion-title>\n\n        <!--ion-toggle style="float: right" [(ngModel)]="proveedor.opcion"></ion-toggle-->\n\n        <ion-label style="float: right" color="gris">puerto: {{this.proveedor.puerto}}</ion-label>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-card>\n\n            <ion-item>\n\n                <ion-label stacked>Nombre</ion-label>\n\n                <ion-input type="text" [(ngModel)]="nombre"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label stacked>Descripción</ion-label>\n\n                <ion-input type="text" [(ngModel)]="descripcion"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label stacked>Tamaño</ion-label>\n\n                <ion-input type="number" [(ngModel)]="tamano"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label stacked>Circunferencia</ion-label>\n\n                <ion-input type="number" [(ngModel)]="circunferencia"></ion-input>\n\n            </ion-item>\n\n\n\n        </ion-card>\n\n\n\n\n\n        <ion-item>\n\n            <ion-label>Fecha</ion-label>\n\n            <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="fecha"></ion-datetime>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item>\n\n            <div text-start>\n\n                Coordenadas\n\n                <button ion-button color="gris" outline item-end icon-start (click)="mylocation()">\n\n                        <ion-icon color="primary" name="compass"></ion-icon>\n\n                        actualizar coordenadas\n\n                </button>\n\n            </div>\n\n            <div>\n\n\n\n            </div>\n\n\n\n            <div>\n\n                <div float-left>\n\n                    <p>\n\n                        lat: {{lat}}\n\n                    </p>\n\n                </div>\n\n                <div float-right>\n\n                    <p>\n\n                        lon: {{lon}}\n\n                    </p>\n\n                </div>\n\n\n\n            </div>\n\n        </ion-item>\n\n\n\n\n\n\n\n        <ion-item>\n\n            <p>Fotografia</p>\n\n            <img [src]="fotografia" *ngIf="fotografia" />\n\n        </ion-item>\n\n\n\n        <ion-label>\n\n            <button ion-button full icon-start (click)="sacarfoto()">\n\n                        Tomar Fotografia \n\n                        <ion-icon name="camera"></ion-icon>\n\n                    </button>\n\n        </ion-label>\n\n\n\n        <ion-label>\n\n            <button ion-button full (click)="subir()">Guardar</button>\n\n        </ion-label>\n\n\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\Project\SW2_geoTrees\appmovil\src\pages\arbol\arbol.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__providers_pro_arboles_pro_arboles__["a" /* ProArbolesProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__["a" /* AndroidPermissions */]])
    ], ArbolPage);
    return ArbolPage;
}());

//# sourceMappingURL=arbol.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeMapsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pro_arboles_pro_arboles__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_reporte_reporte__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NativeMapsProvider = /** @class */ (function () {
    function NativeMapsProvider(googleMaps, proveedor, alertCtrl) {
        this.googleMaps = googleMaps;
        this.proveedor = proveedor;
        this.alertCtrl = alertCtrl;
        this.alertmap = this.alertCtrl.create({
            title: 'Map Ready',
            buttons: ['ok']
        });
        this.alerttree = this.alertCtrl.create({
            title: 'Tree ready',
            buttons: ['ok']
        });
        this.alerterror = this.alertCtrl.create({
            title: 'error',
            buttons: ['ok']
        });
        this.CargarDatos();
    }
    NativeMapsProvider.prototype.init = function (location, element) {
        var _this = this;
        var latLng = new __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["e" /* LatLng */](location.latitude, location.longitude);
        var opts = {
            mapType: __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["c" /* GoogleMapsMapTypeId */].SATELLITE,
            controls: {
                'myLocationButton': true,
                'myLocation': true
            },
            camera: {
                latLng: latLng,
                zoom: 14
            }
        };
        this.map = this.googleMaps.create(element.nativeElement, opts);
        /*let marker: Marker = this.map.addMarkerSync({
          title: 'tree',
          position: latLng
        });*/
        this.map.on(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).subscribe(function () {
            _this.alertmap.present();
            console.log('Map is ready!');
            _this.CargaCompleta();
        });
    }; //fin init
    NativeMapsProvider.prototype.CargarDatos = function () {
        var _this = this;
        this.proveedor.obtenerarbol().subscribe(function (data) {
            _this.arboles = data.data;
        });
    };
    NativeMapsProvider.prototype.CargarArboles = function () {
        for (var _i = 0, _a = this.arboles; _i < _a.length; _i++) {
            var arbol = _a[_i];
            var latLng = new __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["e" /* LatLng */](arbol.lat, arbol.lon);
            this.addMarker(latLng, arbol.id, arbol);
        }
    };
    NativeMapsProvider.prototype.CargaCompleta = function () {
        this.CargarDatos();
        var that = this;
        setTimeout(function () {
            that.CargarArboles();
        }, 3000);
    };
    NativeMapsProvider.prototype.addMarker = function (position, title, arbol) {
        var _this = this;
        var htmlInfoWindow = new __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["d" /* HtmlInfoWindow */]();
        var frame = document.createElement('div');
        frame.innerHTML = [
            '<h1>' + arbol._type.name + '</h1>',
            '<img align="left" margin 5px height="92" width="64" src="http://www.comunitree.tk:8080/media/trees/6.jpg">',
            'id: ' + String(arbol.id) + '<br/>',
            'coordenadas: ' + arbol.lat + ' / ' + arbol.lon + '<br/>',
            'descripción: ' + arbol.description + '<br/>',
            'tamaño: ' + arbol.size + '<br/>',
            'fecha: ' + arbol.grounded + '</p>',
            '<input type="button" value="Reportar" class="button button-default" onclick="return this.irReporte();">'
        ].join("");
        htmlInfoWindow.setContent(frame, {
            width: "280px",
            height: "330px"
        });
        var marker = this.map.addMarkerSync({
            position: position,
            animation: 'DROP',
            flat: true,
            icon: {
                url: 'assets/imgs/comunitree.png'
            }
        });
        marker.on(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function () {
            htmlInfoWindow.open(marker);
            _this.map.animateCamera({
                target: { lat: arbol.lat, lng: arbol.lon },
                zoom: 20,
                duration: 1500
            });
        });
    };
    NativeMapsProvider.prototype.irReporte = function () {
        window.location.reload();
        this.alerttree.present();
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */].prototype.push(__WEBPACK_IMPORTED_MODULE_4__pages_reporte_reporte__["a" /* ReportePage */]);
    };
    NativeMapsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_2__providers_pro_arboles_pro_arboles__["a" /* ProArbolesProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], NativeMapsProvider);
    return NativeMapsProvider;
}());

//# sourceMappingURL=native-maps.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsMapsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pro_arboles_pro_arboles__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JsMapsProvider = /** @class */ (function () {
    function JsMapsProvider(proveedor) {
        this.proveedor = proveedor;
    }
    JsMapsProvider.prototype.init = function (location, element) {
        var latLng = new google.maps.LatLng(location.latitude, location.longitude);
        var opts = {
            center: latLng,
            zoom: 11,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(element.nativeElement, opts);
        this.CargaCompleta();
    };
    JsMapsProvider.prototype.addMarker = function (position, title) {
        new google.maps.Marker({
            title: title,
            position: position,
            map: this.map
        });
    };
    JsMapsProvider.prototype.CargarDatos = function () {
        var _this = this;
        console.log("cargando datos");
        this.proveedor.obtenerarbol().subscribe(function (data) {
            _this.arboles = data.data;
        });
        console.log("datos cargados");
    };
    JsMapsProvider.prototype.CargarArboles = function () {
        for (var _i = 0, _a = this.arboles; _i < _a.length; _i++) {
            var arbol = _a[_i];
            var latLng = new __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["e" /* LatLng */](parseFloat(arbol.lat), parseFloat(arbol.lon));
            this.addMarker(latLng, String(arbol.id));
        }
    };
    JsMapsProvider.prototype.CargaCompleta = function () {
        var that = this;
        this.CargarDatos();
        setTimeout(function () {
            that.CargarArboles();
        }, 5000);
    };
    JsMapsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_pro_arboles_pro_arboles__["a" /* ProArbolesProvider */]])
    ], JsMapsProvider);
    return JsMapsProvider;
}());

//# sourceMappingURL=js-maps.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map