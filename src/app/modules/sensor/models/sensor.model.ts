import { InjectionToken } from '@angular/core';

export interface Sensor {
  key: string;
  value: number;
  time: Date;
  description: string;
}

export const SENSOR_DATA = new InjectionToken<Sensor[]>('SENSOR_DATA');
