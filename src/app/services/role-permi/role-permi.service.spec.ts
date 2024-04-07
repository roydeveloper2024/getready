import { TestBed } from '@angular/core/testing';

import { RolePermiService } from './role-permi.service';

describe('RolePermiService', () => {
  let service: RolePermiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolePermiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
