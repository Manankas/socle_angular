import { TestBed, inject } from '@angular/core/testing';

import { ContactFactoryService } from './contact-factory.service';

describe('CtFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactFactoryService]
    });
  });

  it('should be created', inject([ContactFactoryService], (service: ContactFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
