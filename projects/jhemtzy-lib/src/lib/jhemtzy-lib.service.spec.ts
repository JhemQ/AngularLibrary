import { TestBed } from '@angular/core/testing';

import { JhemtzyLibService } from './jhemtzy-lib.service';

describe('JhemtzyLibService', () => {
  let service: JhemtzyLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JhemtzyLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
