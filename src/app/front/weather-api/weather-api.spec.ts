import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherApi } from './weather-api';

describe('WeatherApi', () => {
  let component: WeatherApi;
  let fixture: ComponentFixture<WeatherApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
