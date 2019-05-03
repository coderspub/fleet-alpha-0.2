import { TestBed } from '@angular/core/testing';

import { FleetMapService } from './fleet-map.service';

describe('FleetMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FleetMapService = TestBed.get(FleetMapService);
    expect(service).toBeTruthy();
  });
});
