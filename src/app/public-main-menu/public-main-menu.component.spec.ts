import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicMainMenuComponent } from './public-main-menu.component';

describe('PublicMainMenuComponent', () => {
  let component: PublicMainMenuComponent;
  let fixture: ComponentFixture<PublicMainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicMainMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
