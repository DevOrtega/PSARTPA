import { TestBed } from '@angular/core/testing';

import { WeatherObservedServiceService } from './weather-observed-service.service';

describe('WeatherObservedServiceService', () => {
  let service: WeatherObservedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherObservedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
