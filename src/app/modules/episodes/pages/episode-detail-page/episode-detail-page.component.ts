import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {Location} from "~shared/models/location.model";
import {Character} from "~shared/models/character.model";
import {Observable} from "rxjs";
import {LocationsApi} from "~shared/actions/locations.actions";
import {Episode} from "~shared/models/episode.model";
import {EpisodesApi} from "~shared/actions/episodes.actions";

@Component({
  selector: 'app-episode',
  templateUrl: './episode-detail-page.component.html',
  styleUrls: ['./episode-detail-page.component.scss']
})
export class EpisodeDetailPageComponent {
  constructor(
    private store: Store<any>,
    private route: ActivatedRoute

  ) {}
  episode: Episode | null = null;
  characters: Character[] = []
  episode$: Observable<any> = this.store.select(state => state.episodes.detail);
  characters$: Observable<any> = this.store.select(state => state.episodes.characters);

  episodeSubscription = this.episode$.subscribe(episode=>{
    this.episode = episode
  });

  charactersSubscription = this.characters$.subscribe(characters=>{
    this.characters = characters
  });


  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(EpisodesApi.loadEpisode({id}));
  }
}
