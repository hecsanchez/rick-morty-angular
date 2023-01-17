import {EndpointsConfig} from "~app/config/endpoints.config";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Character} from "~shared/models/character.model";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor (private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(EndpointsConfig.characters);
  }
}
