import { TestBed } from '@angular/core/testing';

import { OmdbserviceService } from './omdbservice.service';

describe('OmdbserviceService', () => {
  let service: OmdbserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmdbserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
