import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { of, switchMap} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {EpisodesService} from "~shared/services/episodes.service";
import {EpisodesApi} from "~shared/actions/episodes.actions";
import {LocationsApi} from "~shared/actions/locations.actions";
import {Episode} from "~shared/models/episode.model";
import {CharactersService} from "~shared/services/characters.service";

@Injectable()
export class EpisodesEffects {
  constructor(
    private actions: Actions,
    private episodesService: EpisodesService,
    private charactersService: CharactersService

) {}
  getEpisodes = createEffect(() =>
    this.actions.pipe(
      ofType(EpisodesApi.loadEpisodes),
      switchMap((action) => {
        return this.episodesService.getEpisodes({ page: Number(action.page), name: action.name }).pipe(
          map((response: any) => {
            return EpisodesApi.loadEpisodesSuccess({ episodes: response.results })
          }),
          catchError((error) =>
            of(EpisodesApi.loadEpisodesError({error}))
          )
        )
      })
    )
  );

  getEpisodeById = createEffect( () =>
    this.actions.pipe(
      ofType(EpisodesApi.loadEpisode),
      switchMap((action) => {
        return this.episodesService.getEpisodeById({ id: Number(action.id) }).pipe(
          map((response: any) => {
            return EpisodesApi.loadEpisodeSuccess({ episode: response })
          }),
          catchError((error) =>
            of(EpisodesApi.loadEpisodeError({error}))
          )
        )
      })
    )
  );

  getEpisodeCharacters = createEffect(() =>
    this.actions.pipe(
      ofType(EpisodesApi.loadEpisodeSuccess),
      switchMap((action)=>{
        const ids = action.episode.characters.map((characterUrl: string) =>
          characterUrl.split('https://rickandmortyapi.com/api/character/')[1])

        return this.charactersService.getCharacterById({ id: ids.join(',') }).pipe(
          map((response: any) => {
            return EpisodesApi.loadEpisodeCharacterSuccess({ characters: response })
          }),
          catchError((error) =>
            of(EpisodesApi.loadEpisodeCharacterError({error}))
          )
        )
      })
    )
  )
}
