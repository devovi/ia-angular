import { TestBed } from '@angular/core/testing';

import { LedMasterService } from '../services/led-master.service';

describe('LedMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LedMasterService = TestBed.get(LedMasterService);
    expect(service).toBeTruthy();
  });
});
