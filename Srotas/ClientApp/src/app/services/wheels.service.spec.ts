import { TestBed } from '@angular/core/testing';

import { WheelsService } from './wheels.service';

describe('WheelsService', () => {
  let service: WheelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WheelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
