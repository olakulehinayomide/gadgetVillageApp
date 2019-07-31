import { TestBed } from '@angular/core/testing';

import { HttpProductHelperService } from './http-product-helper.service';

describe('HttpProductHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpProductHelperService = TestBed.get(HttpProductHelperService);
    expect(service).toBeTruthy();
  });
});
