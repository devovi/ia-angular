import { TestBed } from '@angular/core/testing';

import { TempsensorService } from './tempsensor.service';

describe('TempsensorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempsensorService = TestBed.get(TempsensorService);
    expect(service).toBeTruthy();
  });
});
