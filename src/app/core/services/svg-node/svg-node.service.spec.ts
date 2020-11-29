import { TestBed } from '@angular/core/testing';

import { SvgNodeService } from './svg-node.service';

describe('SvgNodeService', () => {
  let service: SvgNodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgNodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
