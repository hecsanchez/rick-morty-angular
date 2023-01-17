import {EndpointsConfig} from "~app/config/endpoints.config";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Character} from "~shared/models/character.model";

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  constructor (private http: HttpClient) {}

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(EndpointsConfig.locations);
  }
}
