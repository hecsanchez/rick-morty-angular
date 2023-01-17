import {createReducer, on, State} from '@ngrx/store';
import {Location} from "~shared/models/location.model";
import {Locations, LocationsApi} from "~shared/actions/locations.actions";
import {Character} from "~shared/models/character.model";

interface LocationsState {
  loading: boolean;
  list: Location[];
  detail: Location | null;
  characters: Character[];
};
export const initialState: LocationsState = {
  loading: false,
  list: [],
  detail: null,
  characters: []
};


export const locationsReducer = createReducer(
  initialState,
  on(LocationsApi.loadLocationsSuccess, (state, {locations}) => {
    return {...state, list: [...state.list, ...locations]};
  }),
  on(LocationsApi.loadLocationsResults, (state, {locations}) => {
    return {...state, list: locations};
  }),
  on(Locations.clearLocations, (state) => {
    return {...state, list: []};
  }),
  on(LocationsApi.loadLocationSuccess, (state, {location}) => {
    return {...state, detail: location};
  }),
  on(LocationsApi.loadLocationCharactersSuccess, (state, {characters}) => {
    return {...state, characters };
  }),
  on(Locations.clearLocation, (state) => {
    return {...state, detail: null};
  }),
);
