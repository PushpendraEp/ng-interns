import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfObjectComponent } from './table-of-object.component';

describe('TableOfObjectComponent', () => {
  let component: TableOfObjectComponent;
  let fixture: ComponentFixture<TableOfObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOfObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableOfObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
