import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { SensorFormComponent, SensorListItemComponent } from './components';
import { SensorContainerComponent, SensorListContainerComponent } from './containers';
import { SENSOR_DATA } from './models';
import { routes } from './routes';
import { dataGenerator, DataService } from './services';

@NgModule({
  declarations: [
    SensorContainerComponent,
    SensorListContainerComponent,
    SensorListItemComponent,
    SensorFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    VirtualScrollerModule,
    ReactiveFormsModule,
    NgbButtonsModule
  ],
  providers: [
    {provide: SENSOR_DATA, useFactory: dataGenerator},
    DataService
  ]
})
export class SensorModule {
}
