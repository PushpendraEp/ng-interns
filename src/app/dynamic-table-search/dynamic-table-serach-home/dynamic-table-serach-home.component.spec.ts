import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableSerachHomeComponent } from './dynamic-table-serach-home.component';

describe('DynamicTableSerachHomeComponent', () => {
  let component: DynamicTableSerachHomeComponent;
  let fixture: ComponentFixture<DynamicTableSerachHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTableSerachHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicTableSerachHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
