import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayFieldsComponent } from './form-array-fields.component';

describe('FormArrayFieldsComponent', () => {
  let component: FormArrayFieldsComponent;
  let fixture: ComponentFixture<FormArrayFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArrayFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormArrayFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
