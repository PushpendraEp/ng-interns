import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionBoxTaskHomeComponent } from './selection-box-task-home.component';

describe('SelectionBoxTaskHomeComponent', () => {
  let component: SelectionBoxTaskHomeComponent;
  let fixture: ComponentFixture<SelectionBoxTaskHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionBoxTaskHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionBoxTaskHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
