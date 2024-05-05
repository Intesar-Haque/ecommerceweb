import { TestBed } from '@angular/core/testing';

import { ToggleComponentService } from './toggle-component.service';

describe('ToggleComponentService', () => {
  let service: ToggleComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
