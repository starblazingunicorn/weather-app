import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalForecastComponent } from './local-forecast.component';

describe('LocalForecastComponent', () => {
  let component: LocalForecastComponent;
  let fixture: ComponentFixture<LocalForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalForecastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
