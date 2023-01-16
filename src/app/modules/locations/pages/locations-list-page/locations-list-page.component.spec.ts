import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsListPageComponent } from './locations-list-page.component';

describe('LocationsComponent', () => {
  let component: LocationsListPageComponent;
  let fixture: ComponentFixture<LocationsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
