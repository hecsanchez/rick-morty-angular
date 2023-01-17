import {createReducer, on, State} from '@ngrx/store';

import {Characters, CharactersApi} from '~shared/actions/characters.actions';
import {Character} from "~shared/models/character.model";
import {LocationsApi} from "~shared/actions/locations.actions";

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
  on(CharactersApi.loadCharactersResults, (state, {characters}) => {
    return {...state, list: characters};
  }),
  on(CharactersApi.loadCharactersLoading, (state, {loading}) => {
    return {...state, loading}
    }),
  on(CharactersApi.loadCharacterSuccess, (state, {character}) => {
    return {...state, detail: character};
  }),
  on(Characters.clearCharacter, (state) => {
    return {...state, detail: null};
  }),
);
