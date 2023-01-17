import {createActionGroup, emptyProps, props} from '@ngrx/store';
import { Character } from "~shared/models/character.model";

export const CharactersApi = createActionGroup({
  source: 'Characters API',
  events: {
    'Load Characters': props<{ page: number, name?: string }>(),
    'Load Characters Results': props<{ characters: Character[] }>(),
    'Load Characters Success': props<{ characters: Character[] }>(),
    'Load Characters Loading':props<{ loading: boolean }>(),
    'Load Characters Error': props<{ error: any }>(),
    'Load Character': props<{ id: number }>(),
    'Load Character Success': props<{ character: Character }>(),
    'Load Character Error': props<{ error: any }>()
  },
});

export const Characters = createActionGroup({
  source: 'Characters',
  events: {
    'Clear Character': emptyProps(),
  },
});

