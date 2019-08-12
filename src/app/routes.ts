import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: 'sensors'
}, {
  path: 'sensors', loadChildren: () => import('./modules/sensor/sensor.module').then(it => it.SensorModule)
}];
