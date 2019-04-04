import { TestBed } from '@angular/core/testing';

import { PressureSensorService } from './pressure-sensor.service';

describe('PressureSensorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PressureSensorService = TestBed.get(PressureSensorService);
    expect(service).toBeTruthy();
  });
});
