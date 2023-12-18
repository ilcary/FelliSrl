import { TestBed } from '@angular/core/testing';

import { ScreenBreakpointService } from './screen-breakpoint.service';

describe('ScreenBreakpointService', () => {
  let service: ScreenBreakpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenBreakpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
