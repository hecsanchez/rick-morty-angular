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
          return this.charactersService.getCharacters({ page: Number(action.page), name: action.name as string }).pipe(
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

  getCharacterById = createEffect(() =>
    this.actions.pipe(
      ofType(CharactersApi.loadCharacter),
      switchMap((action) => {
        return this.charactersService.getCharacterById({ id: action.id }).pipe(
          map((response: any) => {
            return CharactersApi.loadCharacterSuccess({ character: response })
          }),
          catchError((error) =>
            of(CharactersApi.loadCharacterError({error}))
          )
        )
      })
    )
  );
}
