import { TestBed } from '@angular/core/testing';

import { HelplineService } from './helpline.service';

describe('HelplineService', () => {
  let service: HelplineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelplineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
