import { TestBed } from '@angular/core/testing';

import { ExternalHttpService } from './external-http.service';

describe('ExternalHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExternalHttpService = TestBed.get(ExternalHttpService);
    expect(service).toBeTruthy();
  });
});
