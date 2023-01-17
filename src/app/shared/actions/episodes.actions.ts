import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {Episode} from "~shared/models/episode.model";
import {Character} from "~shared/models/character.model";

export const EpisodesApi = createActionGroup({
  source: 'Episodes API',
  events: {
    'Load Episodes': props<{ page: Number, name?: string }>(),
    'Load Episodes Results': props<{ episodes: Episode[] }>(),
    'Load Episodes Success': props<{ episodes: Episode[] }>(),
    'Load Episodes Error': props<{ error: any }>(),
    'Load Episode': props<{ id: number }>(),
    'Load Episode Success': props<{ episode: Episode }>(),
    'Load Episode Error': props<{ error: any }>(),
    'Load Episode Character': props<{ id: number }>(),
    'Load Episode Character Success': props<{ characters: Character[] }>(),
    'Load Episode Character Error': props<{ error: any }>(),
  },
});

export const Episodes = createActionGroup({
  source: 'Episodes',
  events: {
    'Clear Episodes': emptyProps(),
    'Clear Episode': emptyProps(),
  },
});

