import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderBookingComponent } from './provider-booking.component';

describe('ProviderBookingComponent', () => {
  let component: ProviderBookingComponent;
  let fixture: ComponentFixture<ProviderBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
