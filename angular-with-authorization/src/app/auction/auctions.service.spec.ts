import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuctionsService } from './auctions.service';

describe('AuctionsService', () => {
  let service: AuctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: []
    });
    service = TestBed.inject(AuctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
