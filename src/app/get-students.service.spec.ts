import { TestBed } from '@angular/core/testing';

import { GetStudentsService } from './get-students.service';

describe('GetEmployeesService', () => {
  let service: GetStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
