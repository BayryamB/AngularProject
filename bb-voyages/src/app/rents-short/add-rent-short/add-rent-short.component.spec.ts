import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRentShortComponent } from './add-rent-short.component';

describe('AddRentShortComponent', () => {
  let component: AddRentShortComponent;
  let fixture: ComponentFixture<AddRentShortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRentShortComponent]
    });
    fixture = TestBed.createComponent(AddRentShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
