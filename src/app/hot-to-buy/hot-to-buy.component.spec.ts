import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotToBuyComponent } from './hot-to-buy.component';

describe('HotToBuyComponent', () => {
  let component: HotToBuyComponent;
  let fixture: ComponentFixture<HotToBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotToBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotToBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
