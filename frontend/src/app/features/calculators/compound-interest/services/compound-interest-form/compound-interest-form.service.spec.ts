import { TestBed } from '@angular/core/testing';

import { CompoundInterestFormService } from './compound-interest-form.service';

describe('FormCompoundInterestService', () => {
  let service: CompoundInterestFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompoundInterestFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
