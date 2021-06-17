import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxFilterComponent } from './check-box-filter.component';

describe('CheckBoxFilterComponent', () => {
  let component: CheckBoxFilterComponent;
  let fixture: ComponentFixture<CheckBoxFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBoxFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
