import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TreesService } from '../../services/trees.service';
import { Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators, EmailValidator} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER } from '@angular/cdk/overlay/typings/overlay-directives';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sendreport',
  templateUrl: './sendreport.component.html',
  styleUrls: ['./sendreport.component.css']
})

export class SendreportComponent implements OnInit {
  email: string;
  tree: any;
  report: Object = {
    name: '',
    lastname: '',
    email: '',
    description: '',
    priority: '3'
  };
  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               private _treesService: TreesService) {
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
  submit(form: NgForm) {
    this.router.navigate( ['/success']);
    console.log(this.report);
  }
}
