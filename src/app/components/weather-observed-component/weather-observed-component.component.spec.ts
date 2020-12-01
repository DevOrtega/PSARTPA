import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherObservedComponent } from './weather-observed.component';

describe('WeatherObservedComponent', () => {
  let component: WeatherObservedComponent;
  let fixture: ComponentFixture<WeatherObservedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherObservedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherObservedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
