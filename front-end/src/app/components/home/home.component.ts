import { Component, OnInit } from '@angular/core';
import { TreesService } from '../../services/trees.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profile;

  constructor(private _treesService: TreesService) {
    }

  ngOnInit() {
  }
}
