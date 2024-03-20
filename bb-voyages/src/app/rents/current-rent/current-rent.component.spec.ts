import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRentComponent } from './current-rent.component';

describe('CurrentRentComponent', () => {
  let component: CurrentRentComponent;
  let fixture: ComponentFixture<CurrentRentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentRentComponent]
    });
    fixture = TestBed.createComponent(CurrentRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
