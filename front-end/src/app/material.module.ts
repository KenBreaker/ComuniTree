import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import {MatRadioModule} from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTabsModule } from '@angular/material/tabs';
import { ChartsModule } from 'ng2-charts';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
	imports: [
		CommonModule,
		MatSlideToggleModule,
		MatRadioModule,
		MatToolbarModule,
		MatButtonModule,
		MatProgressBarModule,
		MatCardModule,
		MatMenuModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
		FlexLayoutModule,
		MatInputModule,
		MatFormFieldModule,
		MatSelectModule,
		FormsModule,
		ReactiveFormsModule,
		ScrollingModule,
		MatTabsModule,
		ChartsModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule
	],
	exports: [
		MatToolbarModule,
		MatRadioModule,
		MatSlideToggleModule,
		MatButtonModule,
		MatProgressBarModule,
		MatCardModule,
		MatMenuModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
		FlexLayoutModule,
		MatInputModule,
		MatFormFieldModule,
		MatSelectModule,
		FormsModule,
		ReactiveFormsModule,
		ScrollingModule,
		MatTabsModule,
		ChartsModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule
	],
	declarations: []
})
export class MaterialModule { }
