import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbCardModule } from '@nebular/theme';
import { TreesService } from '../../services/trees.service';
import { ThemeModule } from '../../@theme/theme.module';
import { MapsRoutingModule, routedComponents } from './maps-routing.module';
import { AgmJsMarkerClustererModule, ClusterManager } from "@agm/js-marker-clusterer";

@NgModule({
  imports: [
    ThemeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCP7DBdMp0oCsy1i2RCxpwxHUD-EREwnqo',
      libraries: ['places'],
    }),
    LeafletModule.forRoot(),
    MapsRoutingModule,
    NgxEchartsModule,
    NbCardModule,
  ],
	providers: [
    TreesService,
    ClusterManager,
    AgmJsMarkerClustererModule
	],

  exports: [],
  declarations: [
    ...routedComponents,
  ],
})
export class MapsModule { }
