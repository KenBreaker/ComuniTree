import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { RequestOptions, Request, Headers, RequestMethod } from '@angular/http';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { TreesService } from '../../services/trees.service';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
	profile;
	user = {
		email: '',
		name: ''
	};
	constructor(private _treesService: TreesService,
		private auth: AuthService) {
	}

	ngOnInit() {
		/*
		this.auth.handleAuthentication();
		if (this.auth.userProfile) {
			this.profile = this.auth.userProfile;
		} else {
			this.auth.getProfile((err, profile) => {
			});
		}*/

	}

	login() {
		this.auth.login();
	}

	logout() {
		this.auth.logout();
	}

}
