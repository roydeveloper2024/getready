import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyGuideComponent } from './emergency-guide.component';

describe('EmergencyGuideComponent', () => {
  let component: EmergencyGuideComponent;
  let fixture: ComponentFixture<EmergencyGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
