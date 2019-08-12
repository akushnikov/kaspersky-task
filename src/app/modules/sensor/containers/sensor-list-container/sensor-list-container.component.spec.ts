import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorListContainerComponent } from './sensor-list-container.component';

describe('SensorListContainerComponent', () => {
  let component: SensorListContainerComponent;
  let fixture: ComponentFixture<SensorListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
