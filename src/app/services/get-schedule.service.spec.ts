import { TestBed } from '@angular/core/testing';

import { GetScheduleService } from './get-schedule.service';

describe('GetScheduleService', () => {
  let service: GetScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
