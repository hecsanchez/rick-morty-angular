import {createReducer, on, State} from '@ngrx/store';
import {Episode} from "~shared/models/episode.model";
import {Episodes, EpisodesApi} from "~shared/actions/episodes.actions";
import {Location} from "~shared/models/location.model";
import {Locations, LocationsApi} from "~shared/actions/locations.actions";
import {Character} from "~shared/models/character.model";

interface EpisodesState {
  loading: boolean;
  list: Episode[];
  detail: Episode | null;
  characters: Character[];
};
export const initialState: EpisodesState = {
  loading: false,
  list: [],
  detail: null,
  characters: []
};


export const episodesReducer = createReducer(
  initialState,
  on(EpisodesApi.loadEpisodesSuccess, (state, {episodes}) => {
    return {...state, list: [...state.list, ...episodes]};
  }),
  on(EpisodesApi.loadEpisodesResults, (state, {episodes}) => {
    return {...state, list: episodes};
  }),
  on(Episodes.clearEpisodes, (state) => {
    return {...state, list: []};
  }),
  on(EpisodesApi.loadEpisodeSuccess, (state, {episode}) => {
    return {...state, detail: episode};
  }),
  on(EpisodesApi.loadEpisodeCharacterSuccess, (state, {characters}) => {
    return {...state, characters };
  }),
  on(Episodes.clearEpisode, (state) => {
    return {...state, detail: null};
  }),
);
