import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store';
import { Character } from "~shared/models/character.model";

export const LocationsApi = createActionGroup({
  source: 'Locations API',
  events: {
    'Load Locations': props<{ page: Number }>(),
    'Load Locations Success': props<{ locations: Location[] }>(),
    'Load Locations Error': props<{ error: any }>()
  },
});
