import {EndpointsConfig} from "~app/config/endpoints.config";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Character} from "~shared/models/character.model";
import {Episode} from "~shared/models/episode.model";

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  constructor (private http: HttpClient) {}

  getEpisodes({ page, name }: { page: number, name?: string }): Observable<Episode[]> {
    return this.http.get<Episode[]>(`${EndpointsConfig.episodes}?page=${page}${name ? `&name=${name}` : ''}`);
  }

  getEpisodeById({ id }: { id: number | string }): Observable<Episode[]> {
    return this.http.get<Episode[]>(`${EndpointsConfig.episodes}/${id}`);
  }
}
