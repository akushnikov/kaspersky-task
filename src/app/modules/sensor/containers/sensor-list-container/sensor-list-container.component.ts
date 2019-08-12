import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VirtualScrollerComponent } from 'ngx-virtual-scroller';
import { BehaviorSubject, interval, merge, Observable, Subject } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';
import { PollingType, Sensor } from '../../models';
import { DataService } from '../../services';

@Component({
  selector: 'app-sensor-list-container',
  templateUrl: './sensor-list-container.component.html',
  styleUrls: ['./sensor-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SensorListContainerComponent implements OnInit, OnDestroy {

  constructor(private service: DataService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  private destroy$ = new Subject();

  data$: Observable<Sensor[]>;
  mode$ = new BehaviorSubject<PollingType>('auto');
  refresh$ = new Subject();

  form: FormGroup;

  @ViewChild('scroll', { static: true })
  scroller: VirtualScrollerComponent;

  ngOnInit() {
    this.form = this.fb.group({
      mode: ['auto']
    });

    this.form.valueChanges.pipe(
      takeUntil(this.destroy$),
      map(it => it.mode)
    ).subscribe(this.mode$);

    this.data$ = merge(
      interval(1000).pipe(
        filter(() => this.mode$.getValue() === 'auto'),
        tap(() => console.log('automated refresh'))
      ),
      this.refresh$.pipe(
        filter(() => this.mode$.getValue() === 'manual'),
        tap(() => console.log('manual refresh'))
      )
    ).pipe(
      takeUntil(this.destroy$),
      map(() => this.service.getData())
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  trackBySensor(idx: number, entity: Sensor) {
    return `${entity.key}_${entity.value}`;
  }

  comparer(left: Sensor, right: Sensor) {
    return left.key === right.key && left.value === right.value;
  }

  navigate(entity: Sensor) {
    this.router.navigate([entity.key], { relativeTo: this.route });
  }

}
