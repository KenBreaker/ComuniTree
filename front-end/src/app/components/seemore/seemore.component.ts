import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TreesService } from '../../services/trees.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-seemore',
  templateUrl: './seemore.component.html',
  styleUrls: ['./seemore.component.css']
})
export class SeemoreComponent implements OnInit {
  tree: any;
  constructor( private router: Router,
    private activatedRoute: ActivatedRoute,
    private _treesService: TreesService, private auth: AuthService) {
    }
  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
    this._treesService.getTree(params['idx']).subscribe(
      data => {
        this.tree = data.data;
      }
    );
  });

  }
  sendReport( idx: number ) {
    this.router.navigate( ['/sendreport', idx] );
  }
  getData( ) {
    return this.tree;
  }
}
