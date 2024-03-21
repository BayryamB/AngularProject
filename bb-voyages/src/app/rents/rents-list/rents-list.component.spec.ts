import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentsListComponent } from './rents-list.component';

describe('RentsListComponent', () => {
  let component: RentsListComponent;
  let fixture: ComponentFixture<RentsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentsListComponent]
    });
    fixture = TestBed.createComponent(RentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
