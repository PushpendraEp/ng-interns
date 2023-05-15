import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableColumnHomeComponent } from './dynamic-table-column-home.component';

describe('DynamicTableColumnHomeComponent', () => {
  let component: DynamicTableColumnHomeComponent;
  let fixture: ComponentFixture<DynamicTableColumnHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTableColumnHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicTableColumnHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
