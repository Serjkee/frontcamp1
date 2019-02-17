import { TestBed } from '@angular/core/testing';

import { CardContentService } from './card-content.service';

describe('CardContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardContentService = TestBed.get(CardContentService);
    expect(service).toBeTruthy();
  });
});
