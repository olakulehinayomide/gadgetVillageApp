import { TestBed, async, inject } from '@angular/core/testing';

import { RedirectIfLoggedinGuardGuard } from './redirect-if-loggedin-guard.guard';

describe('RedirectIfLoggedinGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedirectIfLoggedinGuardGuard]
    });
  });

  it('should ...', inject([RedirectIfLoggedinGuardGuard], (guard: RedirectIfLoggedinGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
