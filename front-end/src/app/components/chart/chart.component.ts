import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { TreesService } from '../../services/trees.service';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-chart',
	templateUrl: './chart.component.html',
	styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
	// lineChart
	public lineChartData: Array<any> = [
		{ data: [50, 32, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40,], label: 'Cantidad de reportes' }
	];
	day = [];
	reports;
	counter = 0;
	public lineChartLabels: Array<any> = [];
	public lineChartOptions: any = {
		responsive: true
	};
	public lineChartColors: Array<any> = [];
	public lineChartLegend: boolean = true;
	public lineChartType: string = 'line';

	public randomize(): void {
		let _lineChartData: Array<any> = new Array(this.lineChartData.length);
		for (let i = 0; i < this.lineChartData.length; i++) {
			_lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
			for (let j = 0; j < this.lineChartData[i].data.length; j++) {
				_lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
			}
		}
		this.lineChartData = _lineChartData;
	}

	// events
	public chartClicked(e: any): void {
		console.log(e);
	}

	public chartHovered(e: any): void {
		console.log(e);
	}

	constructor(
		private _treesService: TreesService,
		private auth: AuthService) {
		this._treesService.getReports().subscribe(
			data => {
				this.reports = data;
			}
		);

	}

	ngOnInit() {
		let today = new Date();
		let aux = today;
		for (let i = 0; i < 30; i++) {
			this.day[i] = formatDate(aux.setDate(aux.getDate() - 1), 'dd/MM', 'en');
		}
		this.lineChartLabels = this.day;

	}
	public randomizeType(): void {
		if (this.counter == 0) {
			this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
			this.counter = 1 + this.counter;
			return;
		}

		if (this.counter == 1) {
			this.lineChartType = this.lineChartType === 'bar' ? 'radar' : 'bar';
			this.counter = 1 + this.counter;
			return;
		}

		if (this.counter == 2) {
			this.lineChartType = this.lineChartType === 'radar' ? 'line' : 'radar';
			this.counter = 0;
			return;
		}
	}
}
