import { Injectable } from '@angular/core';
import { ThrowStmt, analyzeAndValidateNgModules } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import {RequestOptions, Request, Headers } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable()
export class TreesService {
  private  apiUrl = '';
  requestOptions = new RequestOptions({ headers: null, withCredentials: true });
  private   trees: any;
  private info = {
    data: ''
  };
  constructor(private http: HttpClient) {
  }

  getTree(idx: number): Observable<any> {
    return this.http.get('http://comunitree.tk:8081/arbol/' + idx + '/');
  }

  getTrees(): Observable<any> {
    return this.http.get('http://comunitree.tk:8081/arbol/all/');
  }
}

export interface Tree {
  id: number;
  lat: number;
  lng: number;
}
