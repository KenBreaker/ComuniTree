import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TreesService } from '../../services/trees.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators, EmailValidator } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER } from '@angular/cdk/overlay/typings/overlay-directives';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { element } from 'protractor';
import { getMaxListeners } from 'cluster';
import { RequestOptions, Request, Headers, RequestMethod } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';

@Component({
	selector: 'app-sendreport',
	templateUrl: './sendreport.component.html',
	styleUrls: ['./sendreport.component.css']
})

export class SendreportComponent implements OnInit {
	profile;
	options: FormGroup;
	tree: any;
	report = {
		tree_id: '',
		title: 'Reporte ComuniTree',
		description: '',
		user_email: ''
	};
	user = {
		email: '',
		username: ''
	};
	constructor(private fb: FormBuilder,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private _treesService: TreesService,
		private auth: AuthService,
		private http: HttpClient
	) {
		this.options = fb.group({
		  color: 'primary',
		  fontSize: [16, Validators.min(10)],
		});
		auth.handleAuthentication();
	}

	ngOnInit() {
		if (this.auth.userProfile) {
			this.profile = this.auth.userProfile;
			this.user.email = (this.profile.nickname + '@gmail.com');
			this.user.username = this.profile.nickname;
		} else {
			this.auth.getProfile((err, profile) => {
			});
		}
		this.activatedRoute.params.subscribe(params => {
			this._treesService.getTree(params['idx']).subscribe(
				data => {
					this.tree = data.data;
					this.report.tree_id = this.tree.id;
				}
			);
		});
	}

	submit(form: NgForm): void {
		let usr = '';
		this.sendReport();
	}
	getFontSize() {
		return Math.max(10, this.options.value.fontSize);
	  }
	sendReport() {
		let res = '';
		this._treesService.addReport(this.report).subscribe(data => {
			res = data;
			console.log(res);
			this.router.navigate(['/success']);
		});
	}

}
