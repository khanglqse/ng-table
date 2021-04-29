import { TestBed } from '@angular/core/testing';

import { NgTableService } from './ng-table.service';

describe('NgTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgTableService = TestBed.get(NgTableService);
    expect(service).toBeTruthy();
  });
});
