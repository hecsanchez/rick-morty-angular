import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable, of, Subject, Subscription} from "rxjs";
import {Locations, LocationsApi} from "~shared/actions/locations.actions";
import {debounceTime, distinctUntilChanged, map, switchMap} from "rxjs/operators";
import {LocationsService} from "~shared/services/locations.service";

@Component({
  selector: 'app-locations',
  templateUrl: './locations-list-page.component.html',
  styleUrls: ['./locations-list-page.component.scss']
})
export class LocationsListPageComponent {
  constructor(
    private store: Store<any>,
    private locationsService: LocationsService

) {}

  locations: Observable<any> = this.store.select(state => state.locations.list);
  page = 1;
  searchText = '';
  results: Observable<any> | undefined
  subject = new Subject()

  ngOnInit() {
    this.store.dispatch(Locations.clearLocation());

    this.store.dispatch(LocationsApi.loadLocations({page: this.page}));

    this.subject.pipe(
      debounceTime(500),
      // @ts-ignore
      distinctUntilChanged(),
      switchMap((searchText: string) => {
        return this.locationsService.getLocations({page: 1, name: searchText}).pipe(
          map((response: any) => {
            return this.store.dispatch(LocationsApi.loadLocationsResults({ locations: response.results }))
          }))
      })).subscribe();
  }

  ngOnDestroy() {
    this.store.dispatch(Locations.clearLocations())
  }

  loadMore() {
    const newPage = this.page + 1;
    this.store.dispatch(LocationsApi.loadLocations({page: newPage, name: this.searchText}));
    this.page = newPage;
  }

  search(value: string): void {
    const searchText = value
    this.searchText = searchText;
    this.subject.next(searchText)
  }
}
