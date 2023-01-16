import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeDetailPageComponent } from './episode-detail-page.component';

describe('CharactersListPageComponent', () => {
  let component: EpisodeDetailPageComponent;
  let fixture: ComponentFixture<EpisodeDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodeDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
