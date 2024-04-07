import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidResponseComponent } from './covid-response.component';

describe('CovidResponseComponent', () => {
  let component: CovidResponseComponent;
  let fixture: ComponentFixture<CovidResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
