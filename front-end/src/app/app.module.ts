import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapComponent } from './components/map/map.component';
import { AppRoutingModule } from './app-routing.module';

// AGM
import { AgmCoreModule } from '@agm/core';
import { SendreportComponent } from './components/sendreport/sendreport.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { TreeComponent } from './components/tree/tree.component';
import { SuccessComponent } from './components/success/success.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

// Services
import { TreesService } from './services/trees.service';
import { HttpClientModule } from '@angular/common/http';
import { SeemoreComponent } from './components/seemore/seemore.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ChartComponent } from './components/chart/chart.component';
import { TableComponent } from './components/table/table.component';
import { ReportsTableComponent } from './components/reports-table/reports-table.component';
//import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
	declarations: [
		AppComponent,
		MapComponent,
		SendreportComponent,
		ToolbarComponent,
		AlertsComponent,
		DashboardComponent,
		HomeComponent,
		TreeComponent,
		SuccessComponent,
		SeemoreComponent,
		ChartComponent,
		TableComponent,
		ReportsTableComponent,
		//Ng2SmartTableModule
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyA0f1JGCUziQ-AXZPASnZ3dq7krgUx_IuU'
		}),
		AppRoutingModule,
		HttpClientModule
	],
	providers: [
		TreesService,
		AuthService,
		AuthGuardService,
		{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
