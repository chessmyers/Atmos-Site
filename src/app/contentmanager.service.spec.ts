import { TestBed, inject } from '@angular/core/testing';

import { ContentmanagerService } from './contentmanager.service';

describe('ContentmanagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentmanagerService]
    });
  });

  it('should be created', inject([ContentmanagerService], (service: ContentmanagerService) => {
    expect(service).toBeTruthy();
  }));
});
