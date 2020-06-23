import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { MapComponent } from './map.component';
import { CamelizePipe } from 'ngx-pipes';
import { MapService } from './map.service';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
  CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDsFmOCXZjSJQGlWa2UGSoSDDPUH0WxMEA'
    })
  ],
  providers: [
  MapService,
  CamelizePipe
  ]
})
export class MapModule { }
