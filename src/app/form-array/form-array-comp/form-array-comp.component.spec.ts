import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayCompComponent } from './form-array-comp.component';

describe('FormArrayCompComponent', () => {
  let component: FormArrayCompComponent;
  let fixture: ComponentFixture<FormArrayCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArrayCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormArrayCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
