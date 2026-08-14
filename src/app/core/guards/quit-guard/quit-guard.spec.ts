import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { quitGuard } from './quit-guard';

describe('quitGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) =>
    TestBed.runInInjectionContext(() => quitGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
