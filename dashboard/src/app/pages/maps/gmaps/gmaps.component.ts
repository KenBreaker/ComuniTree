import { Component } from '@angular/core';
import { TreesService } from '../../../services/trees.service'; 
import predictions from "./predictions.json"
@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  template: `
    <nb-card>
      <nb-card-header>Google Maps</nb-card-header>
      <nb-card-body *ngIf = trees >
        <agm-map [zoom]="15" [latitude]="lat" [longitude]="lng">
          <agm-marker *ngFor="let tree of trees; let i = index" [latitude]="tree.lat" [longitude]="tree.lon" [iconUrl]="'/assets/icon.png'">
          <agm-info-window>
          <strong style="color:black">ComuniTree</strong>
          <p style="color:black">ID árbol = {{ tree.id }} </p>
          <p *ngIf=tree_reports style="color:black">Cantidad de reportes = {{ tree_reports[i] }} </p>
          <p style="color:black">Nivel de riesgo actual = {{ predict[i].prediction[0].risk }} </p>
          </agm-info-window>
          </agm-marker>
        </agm-map>
      </nb-card-body>
    </nb-card>
  `,
})
export class GmapsComponent {
  lat = -33.359293;
  lng = -70.734355;
  trees
  tree_reports = []
  predict
  constructor(private _treesService: TreesService) {

  }
  
  ngAfterViewInit(): void {
		this._treesService.getTrees().subscribe(
			data => {
        this.trees = data.data;
        console.log(this.predict = predictions)
        
        for (let i = 0; i< this.trees.length ; i++){
          //alert (this.trees[i])
          this._treesService.getReport(this.trees[i].id).subscribe(
            data => {
              if(data.length > 0){
                this.tree_reports[i] = data.length
              } else {
                this.tree_reports[i] = '0'
              }
            });
      }
    }
    );
    


  }
}
