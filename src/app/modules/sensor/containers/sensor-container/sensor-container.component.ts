import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Sensor } from '../../models';
import { DataService } from '../../services';

@Component({
  selector: 'app-sensor-container',
  templateUrl: './sensor-container.component.html',
  styleUrls: ['./sensor-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SensorContainerComponent implements OnInit, OnDestroy {

  constructor(private service: DataService, private route: ActivatedRoute, private router: Router) { }

  private destroy$ = new Subject();

  entity$ = new BehaviorSubject<Sensor>(null);

  ngOnInit() {
    this.route.paramMap.pipe(
      takeUntil(this.destroy$),
      map(it => it.get('key')),
      map(it => this.service.getById(it))
    ).subscribe(this.entity$);
    this.entity$.subscribe(it => console.log(it));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
