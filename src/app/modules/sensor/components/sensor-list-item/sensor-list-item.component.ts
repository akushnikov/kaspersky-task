import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Sensor } from '../../models';

@Component({
  selector: 'app-sensor-list-item',
  templateUrl: './sensor-list-item.component.html',
  styleUrls: ['./sensor-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SensorListItemComponent {

  @Input()
  entity: Sensor;

}
