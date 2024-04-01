import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRentShortComponent } from './update-rent-short.component';

describe('UpdateRentShortComponent', () => {
  let component: UpdateRentShortComponent;
  let fixture: ComponentFixture<UpdateRentShortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRentShortComponent]
    });
    fixture = TestBed.createComponent(UpdateRentShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
