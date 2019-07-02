import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  private apiUrl = '35.247.204.141:8080';
	headers = new Headers();
	private trees: any;
	private info = {
		data: ''
	};
	constructor(private http: HttpClient) {
	}

	getTree(idx: number): Observable<any> {
		return this.http.get('http://'+this.apiUrl+'/arbol/' + idx + '/');
	}
	getUsers(): Observable<any> {
		return this.http.get('http://'+this.apiUrl+'/api/v1/users/');
	}
	getTrees(): Observable<any> {
		return this.http.get('http://'+this.apiUrl+'/arbol/all/');
	}
	getReports(): Observable<any> {
		return this.http.get('http://'+this.apiUrl+'/api/v1/reports/list/');
	}
	getReport(idx: number): Observable<any> {
		return this.http.get('http://'+this.apiUrl+'/api/v1/reports/get/list/' + idx);
	}

	addUser(user): Observable<any> {
		const headers = new Headers({ 'Content-Type': 'application/json' });
		return this.http.post('http://'+this.apiUrl+'/api/v1/users/', user);
	}
	addTree(user): Observable<any> {
		const headers = new Headers({ 'Content-Type': 'application/json' });
		return this.http.post('http://'+this.apiUrl+'/arbol/agregar/', user);
	}

	addReport(report): Observable<any> {
		const headers = new Headers({ 'Content-Type': 'application/json' });
		return this.http.post('http://'+this.apiUrl+'/api/v1/reports/create/', report);
	}
}
