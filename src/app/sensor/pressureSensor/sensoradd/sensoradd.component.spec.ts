import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensoraddComponent } from './sensoradd.component';

describe('SensoraddComponent', () => {
  let component: SensoraddComponent;
  let fixture: ComponentFixture<SensoraddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensoraddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensoraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
