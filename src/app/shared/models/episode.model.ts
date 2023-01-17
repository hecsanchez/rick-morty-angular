import { Deserializable } from '~shared/interfaces/deserializable.interface';

export class Episode implements Deserializable {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;

  constructor(episode: any = {}) {
    this.id = episode.id;
    this.name = episode.name;
    this.air_date = episode.status;
    this.episode = episode.episode;
    this.characters = episode.characters;
    this.url = episode.url;
    this.created = episode.created;
  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
