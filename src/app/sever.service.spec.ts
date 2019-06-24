import { TestBed } from '@angular/core/testing';

import { SeverService } from './sever.service';

describe('SeverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeverService = TestBed.get(SeverService);
    expect(service).toBeTruthy();
  });
});
