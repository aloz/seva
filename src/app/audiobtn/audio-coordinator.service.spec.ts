import { TestBed } from '@angular/core/testing';

import { AudioCoordinatorService } from './audio-coordinator.service';

describe('AudioCoordinatorService', () => {
  let service: AudioCoordinatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioCoordinatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
