import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderReviewComponent } from './provider-review.component';

describe('ProviderReviewComponent', () => {
  let component: ProviderReviewComponent;
  let fixture: ComponentFixture<ProviderReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
