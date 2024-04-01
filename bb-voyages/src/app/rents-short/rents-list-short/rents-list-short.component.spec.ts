import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentsListComponentShort } from './rents-list-short.component';

describe('RentsListComponent', () => {
  let component: RentsListComponentShort;
  let fixture: ComponentFixture<RentsListComponentShort>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentsListComponentShort],
    });
    fixture = TestBed.createComponent(RentsListComponentShort);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
