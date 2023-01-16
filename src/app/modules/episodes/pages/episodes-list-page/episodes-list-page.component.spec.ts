import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesListPageComponent } from './episodes-list-page.component';

describe('LocationsComponent', () => {
  let component: EpisodesListPageComponent;
  let fixture: ComponentFixture<EpisodesListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodesListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
