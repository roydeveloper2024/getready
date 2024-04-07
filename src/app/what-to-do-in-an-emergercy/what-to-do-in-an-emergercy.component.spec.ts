import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatToDoInAnEmergercyComponent } from './what-to-do-in-an-emergercy.component';

describe('WhatToDoInAnEmergercyComponent', () => {
  let component: WhatToDoInAnEmergercyComponent;
  let fixture: ComponentFixture<WhatToDoInAnEmergercyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatToDoInAnEmergercyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatToDoInAnEmergercyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
