import { TestBed } from '@angular/core/testing';

import { LoginRegisterServiceService } from './login-register-service.service';

describe('LoginRegisterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginRegisterServiceService = TestBed.get(LoginRegisterServiceService);
    expect(service).toBeTruthy();
  });
});
