import { TestBed } from '@angular/core/testing';

import { HospitalserviceService } from './hospitalservice.service';

describe('HospitalserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HospitalserviceService = TestBed.get(HospitalserviceService);
    expect(service).toBeTruthy();
  });
});
