import {createReducer, on, State} from '@ngrx/store';

import {CharactersApi} from '~shared/actions/characters.actions';
import {Character} from "~shared/models/character.model";

interface CharactersState {
  loading: boolean;
  list: Character[];
  detail: Character | null
};
export const initialState: CharactersState = {
  loading: false,
  list: [],
  detail: null
};


export const charactersReducer = createReducer(
  initialState,
  on(CharactersApi.loadCharactersSuccess, (state, {characters}) => {
    return {...state, list: [...state.list, ...characters]};
  }),
  on(CharactersApi.loadCharactersLoading, (state, {loading}) => {
    return {...state, loading}
    })
);
