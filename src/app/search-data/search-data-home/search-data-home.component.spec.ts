import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDataHomeComponent } from './search-data-home.component';

describe('SearchDataHomeComponent', () => {
  let component: SearchDataHomeComponent;
  let fixture: ComponentFixture<SearchDataHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDataHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDataHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
