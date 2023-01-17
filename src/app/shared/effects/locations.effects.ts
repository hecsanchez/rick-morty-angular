import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { of, switchMap} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {CharactersApi} from "~shared/actions/characters.actions";
import {LocationsService} from "~shared/services/locations.service";

@Injectable()
export class LocationsEffects {
  constructor(
    private actions: Actions,
    private locationsService: LocationsService
  ) {}
  getCharacters = createEffect(() =>
    this.actions.pipe(
      ofType(CharactersApi.loadCharacters),
      switchMap((action) => {

        return this.charactersService.getCharacters().pipe(
          map((response: any) => {
            return CharactersApi.loadCharactersSuccess({ characters: response.results })
          }),
          catchError((error) =>
            of(CharactersApi.loadCharactersError({error}))
          )
        )
      })
    )
  );
}
