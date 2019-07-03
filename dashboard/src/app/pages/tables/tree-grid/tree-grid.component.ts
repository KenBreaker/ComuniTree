import { Component, Input } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { TreesService } from '../../../services/trees.service'; 

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  Árboles: string;
  Distancia_al_cableado_eléctrico: string;
  Plaga: string;
  description?: string;
  Cantidad_de_Reportes?: number;
}

@Component({
  selector: 'ngx-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss'],
})
export class TreeGridComponent {
  trees
  tree_reports = []
  customColumn = 'Árboles';
  defaultColumns = [ 'Distancia_al_cableado_eléctrico', 'Plaga', 'Cantidad_de_Reportes' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  dataSource: NbTreeGridDataSource<FSEntry>;
  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  data2 = []
  data3 = []
  private data: TreeNode<FSEntry>[] = [
    
  { data: { Árboles: 'ID = 1', Distancia_al_cableado_eléctrico: '-', Plaga: '-', Cantidad_de_Reportes: 2},
    children: [
    { data: { Árboles: 'Reporte 1', Plaga: 'No', Distancia_al_cableado_eléctrico: 'Lejos' } },
    { data: { Árboles: 'Reporte 2', Plaga: 'No', Distancia_al_cableado_eléctrico: 'Cercano' } },
  ]},
  { data: { Árboles: 'ID = 2', Distancia_al_cableado_eléctrico: '-', Plaga: '-', Cantidad_de_Reportes: 4},
  children: [
  { data: { Árboles: 'Reporte 1', Plaga: 'Si', Distancia_al_cableado_eléctrico: 'Lejos' } },
  { data: { Árboles: 'Reporte 2', Plaga: 'Si', Distancia_al_cableado_eléctrico: 'Lejos' } },
  { data: { Árboles: 'Reporte 3', Plaga: 'Si', Distancia_al_cableado_eléctrico: 'Lejos' } },
  { data: { Árboles: 'Reporte 4', Plaga: 'Si', Distancia_al_cableado_eléctrico: 'Lejos' } },
  ]},
  { data: { Árboles: 'ID = 3', Distancia_al_cableado_eléctrico: '-', Plaga: '-', Cantidad_de_Reportes: 1},
  children: [
  { data: { Árboles: 'Reporte 1', Plaga: 'No', Distancia_al_cableado_eléctrico: 'Cercano' } }
  ]},
  { data: { Árboles: 'ID = 1', Distancia_al_cableado_eléctrico: '-', Plaga: '-', Cantidad_de_Reportes: 2},
  children: [
  { data: { Árboles: 'Reporte 1', Plaga: 'No', Distancia_al_cableado_eléctrico: 'Lejos' } },
  { data: { Árboles: 'Reporte 2', Plaga: 'No', Distancia_al_cableado_eléctrico: 'Cercano' } },
  ]},
  { data: { Árboles: 'ID = 4', Distancia_al_cableado_eléctrico: '-', Plaga: '-', Cantidad_de_Reportes: 4},
  children: [
  { data: { Árboles: 'Reporte 1', Plaga: 'No', Distancia_al_cableado_eléctrico: 'Cercano' } },
  { data: { Árboles: 'Reporte 2', Plaga: 'No', Distancia_al_cableado_eléctrico: 'Lejos' } },
  { data: { Árboles: 'Reporte 3', Plaga: 'Si', Distancia_al_cableado_eléctrico: 'Cercano' } },
  { data: { Árboles: 'Reporte 4', Plaga: 'No', Distancia_al_cableado_eléctrico: 'Lejos' } },
  ]},
  { data: { Árboles: 'ID = 5', Distancia_al_cableado_eléctrico: '-', Plaga: '-', Cantidad_de_Reportes: 1},
  children: [
  { data: { Árboles: 'Reporte 1', Plaga: 'No', Distancia_al_cableado_eléctrico: 'Tocando los cables' } }
  ]},
];
  constructor(private _treesService: TreesService, private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    this._treesService.getTrees().subscribe(
			aux => {
        this.trees = aux.data;
        console.log(this.trees)
        for (let i = 0; i< this.trees.length ; i++){
          //alert (this.trees[i])
          this._treesService.getReport(this.trees[i].id).subscribe(
            aux => {
              if(aux.length > 0){
                this.tree_reports[i] = aux
              } else {
                this.tree_reports[i] = '0'
              }
            });
      }
      

      this.dataSource = this.dataSourceBuilder.create( this.data);
    }
    );

    
  }
  
  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }



  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
}

@Component({
  selector: 'ngx-fs-icon',
  template: `
    <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon>
      <nb-icon icon="file-text-outline"></nb-icon>
    </ng-template>
  `,
})
export class FsIconComponent {
  @Input() plague: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.plague === 'dir';
  }
}
