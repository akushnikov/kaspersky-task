import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sensor } from '../../models';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-sensor-form',
  templateUrl: './sensor-form.component.html',
  styleUrls: ['./sensor-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SensorFormComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  form: FormGroup;

  @Input()
  entity: Sensor;

  @Output()
  back = new EventEmitter();

  ngOnInit() {
    this.form = this.fb.group({
      key: [this.entity.key],
      value: [this.entity.value],
      time: [formatDate(this.entity.time, 'yyyy-MM-dd', 'en')],
      description: [this.entity.description]
    });
  }

  onBackBtnClick() {
    this.back.emit();
  }

}
