import { TestBed } from '@angular/core/testing';

import { LuisServiceService } from './luis-service.service';

describe('LuisServiceService', () => {
  let service: LuisServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuisServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
