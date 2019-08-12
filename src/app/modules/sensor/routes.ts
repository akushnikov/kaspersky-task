import { Routes } from '@angular/router';
import { SensorContainerComponent, SensorListContainerComponent } from './containers';

export const routes: Routes = [{
  path: '', pathMatch: 'full', component: SensorListContainerComponent
}, {
  path: ':key', component: SensorContainerComponent
}];
