import { Deserializable } from '~shared/interfaces/deserializable.interface';

export class Character implements Deserializable {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;

  constructor(character: any = {}) {
    this.id = character.id;
    this.name = character.name;
    this.status = character.status;
    this.species = character.species;
    this.type = character.type;
    this.gender = character.gender;
    this.origin = character.origin;
    this.location = character.location
    this.image = character.image;
    this.episode = character.episode;
    this.url = character.url;
    this.created = character.created;
  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
