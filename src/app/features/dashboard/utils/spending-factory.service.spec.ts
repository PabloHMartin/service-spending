import { TestBed } from '@angular/core/testing';

import { SpendingFactoryService } from './spending-factory.service';

describe('SpendingFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpendingFactoryService = TestBed.get(SpendingFactoryService);
    expect(service).toBeTruthy();
  });
});
