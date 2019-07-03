import { TestBed } from '@angular/core/testing';

import { HttpAuthHelperService } from './http-auth-helper.service';

describe('HttpAuthHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpAuthHelperService = TestBed.get(HttpAuthHelperService);
    expect(service).toBeTruthy();
  });
});
