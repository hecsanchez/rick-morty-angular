import { Deserializable } from '~shared/interfaces/deserializable.interface';
import {Observable} from "rxjs";

export class Location implements Deserializable {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  characters?: Observable<any>;
  created: string;

  constructor(location: any = {}) {
    this.id = location.id;
    this.name = location.name;
    this.type = location.status;
    this.dimension = location.species;
    this.residents = location.type;
    this.created = location.created;
    this.characters = location.characters;
  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
