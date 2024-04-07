import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationProgramComponent } from './donation-program.component';

describe('DonationProgramComponent', () => {
  let component: DonationProgramComponent;
  let fixture: ComponentFixture<DonationProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
