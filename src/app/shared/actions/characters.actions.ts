import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store';
import { Character } from "~shared/models/character.model";

export const CharactersApi = createActionGroup({
  source: 'Characters API',
  events: {
    'Load Characters': emptyProps(),
    'Load Characters Success': props<{ characters: Character[] }>(),
    'Load Characters Error': props<{ error: any }>()
  },
});
