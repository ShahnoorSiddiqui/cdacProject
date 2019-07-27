import { TestBed } from '@angular/core/testing';

import { VaccinationServiceService } from './vaccination-service.service';

describe('VaccinationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VaccinationServiceService = TestBed.get(VaccinationServiceService);
    expect(service).toBeTruthy();
  });
});
