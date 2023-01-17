import {createReducer, on, State} from '@ngrx/store';

import {CharactersApi} from '~shared/actions/characters.actions';
import {Character} from "~shared/models/character.model";

export const initialState: ReadonlyArray<Character> = [];


export const charactersReducer = createReducer(
  initialState,
  on(CharactersApi.loadCharactersSuccess, (state, {characters}) => {
    return characters;
  })
);
