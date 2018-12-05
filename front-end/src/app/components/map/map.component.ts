import { Component, OnInit } from '@angular/core';
import { TreesService } from '../../services/trees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = 'Mapa';
  trees: any;
  info: any;
  response = 0;
  lat_init: number;
  lng_init: number;

  constructor(private _treesService: TreesService,
              private router: Router) {
                this._treesService.getTrees().subscribe(
                  data => {
                    this.trees = data.data;
                  }
                );
                this.lat_init = -33.434986;
                this.lng_init = -70.614955;
  }
  ngOnInit() {

  }
  sendReport( idx: number ) {
    this.router.navigate( ['/sendreport', idx] );
  }
  seeMore( idx: number ) {
    this.router.navigate( ['/seemore', idx] );
  }
  getData( ) {
    return this.trees;
  }



}