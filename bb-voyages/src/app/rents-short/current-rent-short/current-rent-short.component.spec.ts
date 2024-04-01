import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRentShortComponent } from './current-rent-short.component';

describe('CurrentRentShortComponent', () => {
  let component: CurrentRentShortComponent;
  let fixture: ComponentFixture<CurrentRentShortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentRentShortComponent]
    });
    fixture = TestBed.createComponent(CurrentRentShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
