import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorContainerComponent } from './sensor-container.component';

describe('SensorContainerComponent', () => {
  let component: SensorContainerComponent;
  let fixture: ComponentFixture<SensorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
