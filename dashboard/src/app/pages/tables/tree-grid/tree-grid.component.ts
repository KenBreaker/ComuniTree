import { Component, Input } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { TreesService } from '../../../services/trees.service'; 

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  Árbol: string;
  Fecha: string;
  Riesgo: string;
  Dias_pronosticados?: number;
}

@Component({
  selector: 'ngx-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss'],
})
export class TreeGridComponent {
  trees
  tree_reports = []
  customColumn = 'Árbol';
  defaultColumns = [ 'Fecha', 'Riesgo', 'Dias_pronosticados' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];
  dataSource: NbTreeGridDataSource<FSEntry>;
  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  data2 = []
  data3 = []
  private data: TreeNode<FSEntry>[]
  constructor(private _treesService: TreesService, private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    this._treesService.getTrees().subscribe(
			aux => {
        this.trees = aux.data;
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
      this.data = [
        { data: { Árbol: 'ID = 12', Fecha: '-', Riesgo: '-', Dias_pronosticados: 5},
          children: [
          { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-03" } },
          { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-04" } },
          { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-05" } },
          { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-06" } },
          { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-07" } },
        ]},
        { data: { Árbol: 'ID = 13', Fecha: '-', Riesgo: '-', Dias_pronosticados: 5},
        children: [
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-03" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-04" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-05" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-06" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-07" } },
        ]},
        { data: { Árbol: 'ID = 14', Fecha: '-', Riesgo: '-', Dias_pronosticados: 5},
        children: [
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-03" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-04" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-05" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-06" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-07" } },
        ]},
        { data: { Árbol: 'ID = 15', Fecha: '-', Riesgo: '-', Dias_pronosticados: 5},
        children: [
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-03" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-04" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-05" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-06" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-07" } },
        ]},
        { data: { Árbol: 'ID = 16', Fecha: '-', Riesgo: '-', Dias_pronosticados: 5},
        children: [
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-03" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-04" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-05" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-06" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-07" } },
        ]},
        { data: { Árbol: 'ID = 17', Fecha: '-', Riesgo: '-', Dias_pronosticados: 5},
        children: [
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-03" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-04" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-05" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-06" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-07" } },
        ]},
        { data: { Árbol: 'ID = 18', Fecha: '-', Riesgo: '-', Dias_pronosticados: 5},
        children: [
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-03" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-04" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-05" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-06" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-07" } },
        ]},
        { data: { Árbol: 'ID = 19', Fecha: '-', Riesgo: '-', Dias_pronosticados: 5},
        children: [
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-03" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-04" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-05" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-06" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-07" } },
        ]},
        { data: { Árbol: 'ID = 20', Fecha: '-', Riesgo: '-', Dias_pronosticados: 5},
        children: [
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-03" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-04" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-05" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-06" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-07" } },
        ]},
        { data: { Árbol: 'ID = 21', Fecha: '-', Riesgo: '-', Dias_pronosticados: 5},
        children: [
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-03" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-04" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-05" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-06" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-07" } },
        ]},
        { data: { Árbol: 'ID = 22', Fecha: '-', Riesgo: '-', Dias_pronosticados: 5},
        children: [
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-03" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-04" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-05" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-06" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-07" } },
        ]},
        { data: { Árbol: 'ID = 23', Fecha: '-', Riesgo: '-', Dias_pronosticados: 5},
        children: [
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-03" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-04" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-05" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-06" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-07" } },
        ]},
        { data: { Árbol: 'ID = 24', Fecha: '-', Riesgo: '-', Dias_pronosticados: 5},
        children: [
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-03" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-04" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-05" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-06" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-07" } },
        ]},
        { data: { Árbol: 'ID = 25', Fecha: '-', Riesgo: '-', Dias_pronosticados: 5},
        children: [
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-03" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-04" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-05" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-06" } },
        { data: { Árbol: '-', Riesgo: 'Bajo', Fecha: "2019-07-07" } },
        ]},
      ];
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
