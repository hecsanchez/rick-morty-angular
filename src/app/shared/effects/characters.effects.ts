import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { of, switchMap} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {CharactersApi} from "~shared/actions/characters.actions";
import {CharactersService} from "~shared/services/characters.service";
import {Character} from "~shared/models/character.model";

@Injectable()
export class CharactersEffects {
  constructor(
    private actions: Actions,
    private charactersService: CharactersService
  ) {}
  getCharacters = createEffect(() =>
    this.actions.pipe(
        ofType(CharactersApi.loadCharacters),
        switchMap((action) =>
            this.charactersService.getCharacters().pipe(
              map((response: any) => {
                return CharactersApi.loadCharactersSuccess({ characters: response.results })
              }),
              catchError((error) =>
                of(CharactersApi.loadCharactersError({error}))
              )
            )
        )
      )
  );
}
