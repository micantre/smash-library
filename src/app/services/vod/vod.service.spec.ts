import { TestBed } from '@angular/core/testing';

import { VodService } from './vod.service';

describe('VodService', () => {
  let service: VodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});