import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {EpisodesService} from "~shared/services/episodes.service";
import {Observable, Subject} from "rxjs";
import {debounceTime, distinctUntilChanged, map, switchMap} from "rxjs/operators";
import {Episodes, EpisodesApi} from "~shared/actions/episodes.actions";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes-list-page.component.html',
  styleUrls: ['./episodes-list-page.component.scss']
})
export class EpisodesListPageComponent {
  constructor(
    private store: Store<any>,
    private episodesService: EpisodesService

  ) {}

  episodes: Observable<any> = this.store.select(state => state.episodes.list);
  page = 1;
  searchText = '';
  results: Observable<any> | undefined
  subject = new Subject()

  ngOnInit() {
    this.store.dispatch(EpisodesApi.loadEpisodes({page: this.page}));

    this.subject.pipe(
      debounceTime(500),
      // @ts-ignore
      distinctUntilChanged(),
      switchMap((searchText: string) => {
        return this.episodesService.getEpisodes({page: 1, name: searchText}).pipe(
          map((response: any) => {
            return this.store.dispatch(EpisodesApi.loadEpisodesResults({ episodes: response.results }))
          }))
      })).subscribe();
  }

  ngOnDestroy() {
    this.store.dispatch(Episodes.clearEpisodes())
  }

  loadMore() {
    const newPage = this.page + 1;
    this.store.dispatch(EpisodesApi.loadEpisodes({page: newPage, name: this.searchText}));
    this.page = newPage;
  }

  search(value: string): void {
    const searchText = value
    this.searchText = searchText;
    this.subject.next(searchText)
  }

}
