import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {Location} from "~shared/models/location.model";
import {Character} from "~shared/models/character.model";

export const LocationsApi = createActionGroup({
  source: 'Locations API',
  events: {
    'Load Locations': props<{ page: Number, name?: string }>(),
    'Load Locations Results': props<{ locations: Location[] }>(),
    'Load Locations Success': props<{ locations: Location[] }>(),
    'Load Locations Error': props<{ error: any }>(),
    'Load Location': props<{ id: Number }>(),
    'Load Location Success': props<{ location: Location }>(),
    'Load Location Error': props<{ error: any }>(),
    'Load Location Characters': props<{ location: Location }>(),
    'Load Location Characters Success': props<{ characters: Character[] }>(),
    'Load Location Characters Error': props<{ error: any }>(),
  },
});

export const Locations = createActionGroup({
  source: 'Locations',
  events: {
    'Clear Locations': emptyProps(),
    'Clear Location': emptyProps(),
  },
});

