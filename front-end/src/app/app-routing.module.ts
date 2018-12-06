import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { SendreportComponent } from './components/sendreport/sendreport.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SuccessComponent } from './components/success/success.component';
import { SeemoreComponent } from './components/seemore/seemore.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'map', component: MapComponent },
	{ path: 'sendreport/:idx', component: SendreportComponent, canActivate: [AuthGuardService] },
	{ path: 'seemore/:idx', component: SeemoreComponent },
	{ path: 'alerts', component: AlertsComponent },
	{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
	{ path: 'success', component: SuccessComponent },
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	// { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
