import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { TreesService } from '../../services/trees.service';

export interface PeriodicElement {
	name: string;
	position: number;
	weight: number;
	symbol: string;
}

var reports = [
	{ id: 1, id_tree: 1, description: 'test' },
	{ id: 2, id_tree: 2, description: 'test' },
	{ id: 3, id_tree: 3, description: 'test' }
];

@Component({
	selector: 'app-reports-table',
	templateUrl: './reports-table.component.html',
	styleUrls: ['./reports-table.component.css']
})
export class ReportsTableComponent implements OnInit {
	reports = [];
	dataSource = new MatTableDataSource(reports);
	displayedColumns: string[] = ['id', 'id_tree', 'description'];

	constructor(private _treesService: TreesService) {
		this._treesService.getReports().subscribe(
			data => {
				this.reports = data;
				this.dataSource = new MatTableDataSource(this.reports);
			}
		);
	}

	ngOnInit() {
	}
	applyFilter(filterValue: number) {
		this._treesService.getReport(filterValue).subscribe(
			data => {
				this.reports = data;
				this.dataSource = new MatTableDataSource(this.reports);
			}
		);
		if (!filterValue) {
			this._treesService.getReports().subscribe(
				data => {
					this.reports = data;
					this.dataSource = new MatTableDataSource(this.reports);
				}
			);
		}

	}
}
