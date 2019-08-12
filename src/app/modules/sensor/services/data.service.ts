import { Inject, Injectable } from '@angular/core';
import { Sensor, SENSOR_DATA } from '../models';
import random from 'lodash.random';

@Injectable()
export class DataService {
  constructor(@Inject(SENSOR_DATA) private data: Sensor[]) {
  }

  private _sorted: Sensor[];
  private _cache: Sensor[];


  get sorted() {
    return this._sorted || (this._sorted = this.data.sort((left, right) => {
      if (left.key > right.key) return 1;
      if (left.key === right.key) return 0;
      return -1;
    }));
  }

  get cache() {
    return (this._cache || this.data);
  }
  set cache(value: Sensor[]) {
    this._cache = value;
  }

  getData(): Sensor[] {
    this.cache = this.sorted.map(it => ({...it, value: random() ? random(-5000, 5000) : it.value }));
    return this.cache;
  }

  getById(key: string): Sensor {
    return this.cache.find(it => it.key === key);
  }

}
