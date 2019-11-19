import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ProArbolesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProArbolesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProArbolesProvider Provider');
  }
  public apiUrl = 'http://www.comunitree.tk:8081/arbol';
  public apiUrl80 = 'http://www.comunitree.tk:8080/arbol';

  public urlv1 = 'http://www.comunitree.tk:8080/api/v1'


  opcion: boolean;
  puerto: any;
  
  obtenerarbol(): Observable<any>{
    if(this.opcion==false){
      this.puerto="8081";
      return this.http.get(this.apiUrl+'/all/');
    }else if(this.opcion==true){
      this.puerto="8080";
      return this.http.get(this.apiUrl80+'/all/');
    }else{
      this.puerto="8081";
      return this.http.get(this.apiUrl+'/all/');
    }
    
  }

  obtenerUsuarios(): Observable<any>{
    return this.http.get(this.urlv1+'/users/');
  }
	addTree(tree): Observable<any> {
		const headers = new Headers({ 'Content-Type': 'application/json' });
		return this.http.post('http://comunitree.tk:8080/arbol/agregar/', tree);
	}

  

}
