import { TestBed, inject } from '@angular/core/testing';

import { RhubarbService } from './rhubarb.service';

describe('RhubarbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RhubarbService]
    });
  });

  it('should be created', inject([RhubarbService], (service: RhubarbService) => {
    expect(service).toBeTruthy();
  }));
});
