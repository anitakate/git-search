import { TestBed } from '@angular/core/testing';

import { UserDetService } from './user-det.service';

describe('UserDetService', () => {
  let service: UserDetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
