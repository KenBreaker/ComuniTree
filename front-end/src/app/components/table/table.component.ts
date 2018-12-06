import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { TreesService } from '../../services/trees.service';

export interface UserData {
	id: number;
	name: string;
	report_counter: number;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
	'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];


const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
	'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
	'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({ selector: 'app-table', templateUrl: './table.component.html', styleUrls: ['./table.component.css'] })

export class TableComponent implements OnInit {
	displayedColumns: string[] = ['id', 'name', 'color'];
	dataSource: MatTableDataSource<UserData>;
	trees;
	report;
	newObject;
	ready = 0;
	info = [];
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private _treesService: TreesService) {
		// Create 100 users
		// const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
		this._treesService.getTrees().subscribe(
			data => {
				this.trees = data.data;
				// Assign the data to the data source for the table to render
				for (let i = 0; i < this.trees.length; i++) {
					this._treesService.getReport(i).subscribe(
						data => {
							this.report = data;
							this.newObject = { "id": (this.trees[i].id - 3), "name": this.trees[i]._type.scientific_name, "report_counter": this.report.length };
							let test = { "report_counter": 0 };
							this.info.push(this.newObject);
						}
					);
				}

				this.dataSource = new MatTableDataSource(this.info);
				this.dataSource.sort = this.sort;
				this.dataSource.paginator = this.paginator;
			}
		);
	}

	ngOnInit() {
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}
	ngAfterViewInit() {
	}

}
