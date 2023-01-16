import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDetailPageComponent } from './location-detail-page.component';

describe('CharactersListPageComponent', () => {
  let component: LocationDetailPageComponent;
  let fixture: ComponentFixture<LocationDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
