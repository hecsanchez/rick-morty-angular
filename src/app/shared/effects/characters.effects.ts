import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { of, switchMap} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {CharactersApi} from "~shared/actions/characters.actions";
import {CharactersService} from "~shared/services/characters.service";

@Injectable()
export class CharactersEffects {
  constructor(
    private actions: Actions,
    private charactersService: CharactersService
  ) {}
  getCharacters = createEffect(() =>
    this.actions.pipe(
        ofType(CharactersApi.loadCharacters),
        switchMap((action) => {
          CharactersApi.loadCharactersLoading({loading: true})
          return this.charactersService.getCharacters({ page: action.page }).pipe(
            map((response: any) => {
              CharactersApi.loadCharactersLoading({loading: false})
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
